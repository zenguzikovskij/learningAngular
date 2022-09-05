import { Component, OnInit } from '@angular/core';
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
  favouriteUsers: User[] = [];
  cardTypesEnum = CardTypes;

  constructor(private usersDataService: UsersDataService, private favouritesDataService: FavouritesService) { }

  ngOnInit(): void {
    // this.users = this.usersDataService.getUsers();
    console.log('init');
    
    this.usersDataService
          .getUsersObs()
          .subscribe(userList => {
            this.users = userList;
            console.log('length of user list is', this.users.length)
            this.fillFavourites();
          });
  }

  updateFavouriteList(id: number) {
    let result = this.favouritesDataService.toggleFavourite(FavouriteTypes.user, id);
    this.fillFavourites();
  }

  fillFavourites(): void {
    console.log('user list', this.users)
    let favouriteIds = this.favouritesDataService.getFavourites(FavouriteTypes.user);
    this.favouriteUsers = [];

    favouriteIds.forEach( userId => {
      let userToAdd = this.users.find( user => user.id === userId);
      userToAdd ? this.favouriteUsers.push(userToAdd) : '' ;
    });
  }

}
