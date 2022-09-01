import { Injectable } from '@angular/core';
import { FavouriteTypes } from '../enums/favourite.types';

//TODO: Clarify usage
// const favouriteStorage = {
//   [key in FavouriteTypes]: number[]
//};

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  private favouriteList: {[key in FavouriteTypes]: number[]} = {
    user: [],
    car: []
  };

  constructor() {}

  toggleFavourite(type: FavouriteTypes, id: number): number  {
    if(this.favouriteList[type].includes(id)) {
      let index = this.favouriteList[type].findIndex( listId => listId === id);
      let res = this.favouriteList[type].splice(index, 1)[0];

      return res;

    } else {
      let res = this.favouriteList[type].push(id);
      
      return res;
    }
  }

  getFavourites(type: FavouriteTypes): number[] {
    return [ ...this.favouriteList[type] ];
  }
}
