import { Component, OnInit } from '@angular/core';
import { CardTypes } from 'src/app/shared/enums/cardTemplate.types';
import { FavouriteTypes } from 'src/app/shared/enums/favourite.types';
import { FavouritesService } from 'src/app/shared/services/favourites.service';
import { Car } from '../../interfaces/car.interface';
import { CarServiceService } from '../../service/car-service.service';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.scss', '../../../../styles/styles.scss']
})
export class CarPageComponent implements OnInit {
  cars: Car[];
  favouriteCars: Car[] = [];
  cardTypesEnum = CardTypes;


  constructor(private carsDataService: CarServiceService, private favouritesDataService: FavouritesService) { }

  ngOnInit(): void {
    this.cars = this.carsDataService.getCars();
    this.fillFavourites();
  }

  
  updateFavouriteList(id: number) {
    let result = this.favouritesDataService.toggleFavourite(FavouriteTypes.user, id);
    this.fillFavourites();
  }

  fillFavourites(): void {
    let favouriteIds = this.favouritesDataService.getFavourites(FavouriteTypes.user);
    this.favouriteCars = [];

    favouriteIds.forEach( carId => {
      let userToAdd = this.cars.find( car => car.id === carId);
      userToAdd ? this.favouriteCars.push(userToAdd) : '' ;
    });
  }
}
