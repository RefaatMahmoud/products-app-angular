import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product = {} as Product
  @Output() productEvent = new EventEmitter<Product>()

  addToCart = () => {
    this.productEvent.emit(this.product)
  }
}
