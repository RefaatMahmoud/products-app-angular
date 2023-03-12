import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart: Product[] = []

  get = () => {
    return this.cart
  }

  push = (product: Product) => {
    this.cart.push(product)
  }

  remove = (product: Product) => {
    const updatedItems = [...this.cart].filter(p => p != product)
    this.cart = updatedItems
  }

  findIndex = (product: Product) => {
    return this.cart.findIndex(p => p === product)
  }
}
