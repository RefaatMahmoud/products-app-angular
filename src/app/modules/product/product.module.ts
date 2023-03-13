import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from 'src/app/components/products/products.component';
import { ProductComponent } from 'src/app/components/products/product/product.component';
import { ProductsService } from 'src/app/services/products.service';

@NgModule({
  declarations: [ProductsComponent, ProductComponent],
  providers: [ProductsService],
  imports: [
    CommonModule,
  ],
  exports: [ProductsComponent]
})
export class ProductModule { }
