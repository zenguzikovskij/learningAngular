import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { take } from 'rxjs';
import { CardTypes } from 'src/app/shared/enums/cardTemplate.types';
import { FavouriteTypes } from 'src/app/shared/enums/favourite.types';
import { FavouritesService } from 'src/app/shared/services/favourites.service';
import { User } from '../../interfaces/user.interface';
import { UsersDataService } from '../../services/users-data.service';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.scss', '../../../../styles/styles.scss']
})
export class UserListPageComponent implements OnInit {
  users: User[];
  usersFilter: string;
  favouriteUsers: User[] = [];
  cardTypesEnum = CardTypes;

  searchGroup: FormGroup;
  searchCriteria: string = '';

  constructor(private usersDataService: UsersDataService, private favouritesDataService: FavouritesService) { 
    this.searchGroup = new FormGroup({});
  }

  ngOnInit(): void {
    this.searchGroup.valueChanges.subscribe( () => {
      this.searchCriteria = this.searchGroup.get('criteria')?.value;
      this.usersDataService.getUsersObs(this.searchCriteria).pipe(take(1))
        .subscribe(userList => {
          this.users = userList;
          this.fillFavourites();
        });
    })

    
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
