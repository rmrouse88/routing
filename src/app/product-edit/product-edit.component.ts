import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProductService } from '../product/product.service';
import { IProduct } from '../product/products';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product:IProduct;

  productEditForm:FormGroup;
  productEditKeys;
  productEditValues;

  constructor(private router:Router,
              private route: ActivatedRoute,
              private service: ProductService,
              private fb: FormBuilder) { }

  ngOnInit() {

    const id = +this.route.snapshot.params['id'];

    this.service.getProduct(id).subscribe(
      product => {
        console.log(product)
        this.product = product
      })

    this.productEditForm = this.fb.group({
      productID:['',[Validators.required]],
      productName:['',[Validators.required]],
      productCode: ['',[Validators.required]],
      releaseDate:['',[Validators.required]],
      description:['',[Validators.required]],
      price:['',[Validators.required]],
      starRating: ['',[Validators.required]],
      imageUrl:['',[Validators.required]]
    })

    console.log(this.productEditForm.controls)

    console.log(this.productEditForm)
    console.log(this.productEditKeys)
    }

    toListView() : void {
      this.router.navigate(["products"], {queryParamsHandling: "preserve"})
    }
}
