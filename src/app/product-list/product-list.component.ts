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

  constructor(private ps:ProductService) { }

  ngOnInit() {

    this.ps.getProducts().subscribe((data) => {
      this.products = data;
      console.log(data);
    })

    console.log(this.products);
  }

  toggleItems(): void {
    this.showItems = !this.showItems;
  }

}
