import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent {

  constructor(private bookService: ProductsService) { }

  public products: Product[] = this.bookService.getProducts()

  cart: Product[] = []

  addToCart = (product: Product) => {
    console.log(product)
  }
}
