import { Injectable } from '@angular/core';
import { Product } from './Entities/Product';
import {HttpClient,HttpParams, HttpHeaders} from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import {tap,catchError,map} from 'rxjs/operators';



@Injectable()
export class ProductService {

 /* products=[{
    "ProductID": "1",
    "Title": "Hammer",
    "Price": 30,
    "inStock":true,
    "Color":"Red",
    "Quantity":500,
    "Details":"This product is awesome",
    "Rating":5,
    "ImageUrl":"/assets/hammer.jpg",
    "ExpiryDate":"04/10/2019"
    
  },
  {
    "ProductID": "2",
    "Title": "Screw",
    "Price": 300,
    "inStock":false,
    "Color":"Black",
    "Quantity":50,
    "Details":"This product is very awesome",
    "Rating":5,
    "ImageUrl":"/assets/screw.jpg",
    "ExpiryDate":"09/09/2020"
  },
  {
    "ProductID": "3",
    "Title": "Saw",
    "Price": 400,
    "inStock":true,
    "Color":"Grey",
    "Quantity":55,
    "Details":"This product is awesome too",
    "Rating":4,
    "ImageUrl":"/assets/saw.jpg",
    "ExpiryDate":"10/10/2500"
  },
  {
    "ProductID": "4",
    "Title": "Axe",
    "Price": 20,
    "inStock":true,
    "Color":"Black",
    "Quantity":400,
    "Details":"This product is awesome too",
    "Rating":3,
    "ImageUrl":"/assets/axe.jpg",
    "ExpiryDate":"20/04/2022"
  },
  {
    "ProductID": "5",
    "Title": "ChainSaw",
    "Price": 80,
    "inStock":false,
    "Color":"Yellow",
    "Quantity":5,
    "Details":"This product is very very awesome",
    "Rating":3,
    "ImageUrl":"/assets/chainsaw.jpg",
    "ExpiryDate":"15/07/2030"
  }
];
  constructor() { }
  getProductsById(id:string) : Product{
    return this.products.find(p=> p.ProductID==id);
  }
  getProducts() : Product[]{
    console.log('hey');
    return this.products;
      
  }*/

  apiurl='https://localhost:44350/api/products';
  headers = new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');
  httpOptions=
  {
    headers:this.headers
  };
  constructor(private http:HttpClient)
  {

  }
  private handleError(error:any)
  {
    console.error(error);
    return throwError(error);
  }
  getProducts() : Observable<Product[]>
  {
    return this.http.get<Product[]>(this.apiurl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
  getProductsById(id:string) : Observable<Product>
  {
    const myurl = `${this.apiurl}/${id} `;
    return this.http.get<Product>(myurl).pipe(
      catchError(this.handleError)
    );
  }
  editProduct(id:string,product:Product) : Observable<null | Product> {
    const myurl = `${this.apiurl}/${id} `;
    console.log(product)
    return this.http.put<Product>(myurl,product,this.httpOptions).pipe(tap(data=> console.log(data)), catchError(this.handleError));
  }
 /* editEmployee(product: Product): Observable<Product> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<Product>(this.apiurl,  
    product, httpOptions);  
  } */ 

  addProduct(product:Product) :Observable<Product>{
    return this.http.post<Product>(this.apiurl,product,this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
  deleteProduct(id:string) : Observable<Product>
  {
    const myurl = `${this.apiurl}/${id} `;
    return this.http.delete<Product>(myurl,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}
