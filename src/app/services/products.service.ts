import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts = (): Product[] => {
    return [
      {
        image: 'https://m.media-amazon.com/images/I/41Z5wm9mBtL._AC_.jpg',
        name: 'HP',
        price: 2000
      },
      {
        image: 'https://m.media-amazon.com/images/I/51qQ1HKf+oL._AC_SX679_.jpg',
        name: 'Mac Pro',
        price: 3000
      },
    ];
  }
}
