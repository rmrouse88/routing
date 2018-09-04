import { Component, OnInit } from '@angular/core';

import { IProduct } from '../product/products';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  showItems:boolean = false;

  products:IProduct[];

  filteredProducts:IProduct[];

  _filter:string;

  get filter() {
    return this._filter
  }

  set filter(filter:string) {
    this._filter=filter.toLocaleLowerCase();
    this.filteredProducts = this.products.filter((product) => {
      return product.productName.toLocaleLowerCase().indexOf(this._filter) !== -1;
  })
  }

  constructor(private ps:ProductService) { }

  ngOnInit() {

    this.ps.getProducts().subscribe((data) => {
      this.products = data;
      this.filteredProducts = data;
      console.log(data);
    })

    console.log(this.products);
  }

  toggleItems(): void {
    this.showItems = !this.showItems;
  }

}
