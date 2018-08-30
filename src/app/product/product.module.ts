import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { ProductService } from '../product/product.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: "products", component: ProductListComponent},
      {path: "products/:id", component: ProductDetailComponent},
      {path: "products/:id/edit", component: ProductEditComponent}
    ])
  ],
  declarations: [ProductListComponent, ProductDetailComponent, ProductEditComponent],
  providers: [ProductService]
})
export class ProductModule { }
