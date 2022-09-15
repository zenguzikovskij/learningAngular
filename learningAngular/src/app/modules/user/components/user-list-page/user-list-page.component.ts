import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';

import { take, debounceTime, distinctUntilChanged, Subscription, of, first, Observable } from 'rxjs';

import { CardTypes } from 'src/app/shared/enums/cardTemplate.types';
import { FavouriteTypes } from 'src/app/shared/enums/favourite.types';
import { PaginatorData } from 'src/app/shared/interfaces/paginatorData.interface';
import { FavouritesService } from 'src/app/shared/services/favourites.service';
import { User } from '../../interfaces/user.interface';
import { UsersDataService } from '../../services/users-data.service';



@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.scss', '../../../../styles/styles.scss']
})
export class UserListPageComponent implements OnInit, OnDestroy {
  users: User[];
  usersFilter: string;
  favouriteUsers: User[] = [];
  cardTypesEnum = CardTypes;

  searchGroup: FormGroup;
  searchCriteria: string = '';
  subscriptions: Subscription = new Subscription;

  paginatorData: PaginatorData = {
    length: 100,
    pageIndex: 0,
    pageSize: 10,
    previousPageIndex: 0,
  }

  constructor(private usersDataService: UsersDataService, private favouritesDataService: FavouritesService) { 
    this.searchGroup = new FormGroup({});
  }

  ngOnInit(): void {
    this.subscribeToSearch();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  requestUsers(event: Observable<Object>): void {
    event
      .subscribe( response => {
        let userList = response as { data: User[], length: number };
        if ( userList.data.length > 0) {
          this.users = userList.data;
          this.paginatorData.length = userList.length;
          this.fillFavourites();
        }
      });
  }


  subscribeToSearch(): void {
    this.subscriptions.add(this.searchGroup.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
      )
      .subscribe( searchCriteria => {
        this.searchCriteria = searchCriteria.criteria;
        this.requestUsers(
          this.usersDataService.getUsersObs(searchCriteria.criteria, this.paginatorData)
          .pipe(take(1))
        );
      })
    );
  }

  updatePagination(event?: PageEvent) {
    let updatedData = event as PaginatorData;
    this.paginatorData = updatedData;

    of(this.paginatorData)
    .pipe(
      first()
    )
    .subscribe( pagiData => {
      this.requestUsers(
        this.usersDataService.getUsersObs(this.searchCriteria, pagiData)
        .pipe(take(1))
      )
    });
    
    // this.paginatorData = event;
  }

  updateFavouriteList(id: number) {
    let result = this.favouritesDataService.toggleFavourite(FavouriteTypes.user, id);
    this.fillFavourites();
  }

  fillFavourites(): void {
    let favouriteIds = this.favouritesDataService.getFavourites(FavouriteTypes.user);
    this.favouriteUsers = [];

    favouriteIds.forEach( userId => {
      let userToAdd = this.users.find( user => user.id === userId);
      userToAdd ? this.favouriteUsers.push(userToAdd) : '' ;
    });
  }

}
