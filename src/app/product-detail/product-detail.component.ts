import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from '../product/product.service';
import { IProduct } from '../product/products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: IProduct;
  
  constructor(private route:ActivatedRoute,
              private ps:ProductService ) { }

  ngOnInit() {
    const param = this.route.snapshot.params.id
    if (param) {
      const id = +param; 
      this.getProduct(id);
    }
  }

  getProduct(id : number) {
    this.ps.getProduct(id).subscribe(
      product => this.product = product);
    
  }


}
