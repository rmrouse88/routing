import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IProduct } from '../product/products';

import { catchError,tap,map, filter} from 'rxjs/operators';



@Injectable()
export class ProductService{

    constructor(private http:HttpClient){}

    getProducts() : Observable<IProduct[]>{
        return this.http.get<IProduct[]>('assets/products.json');
    }    

    getProduct(id : number) : Observable<IProduct> {
        return this.getProducts().pipe(
            map((products: IProduct[]) => products.find(p => p.productId === id))
          );
    }
}