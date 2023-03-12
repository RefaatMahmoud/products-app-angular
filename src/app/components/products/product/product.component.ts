import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product = {} as Product
  inCart: boolean = false;

  constructor(private _cartService: CartService) { }

  toggleCart = () => {
    const findIndex = this._cartService.findIndex(this.product);
    if (findIndex >= 0) {
      this._cartService.remove(this.product)
    } else {
      this._cartService.push(this.product)
    }
    this.inCart = !this.inCart
  }
}
