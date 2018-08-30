import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from '../welcome/welcome.component';
import { LoginComponent } from '../login/login.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes:Routes = [
  {path: "", redirectTo: "welcome", pathMatch: "full"},
  {path:"welcome", component: WelcomeComponent},  
  {path:"product-edit", component: ProductEditComponent},
  {path:"product-detail", component: ProductDetailComponent},
  {path: "**", component: NotFoundComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [NotFoundComponent]
})
export class RoutingModule { }
