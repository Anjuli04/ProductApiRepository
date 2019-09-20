import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {

  products:any;
  searchText='';
  imagewidth=50;
  imagemargin=2;
  constructor(private ps:ProductService,private router:Router) { }

  getProducts() : void {
    this.ps.getProducts().subscribe(data =>{
      this.products=data;
    })
  }
  idtofetch ="1";
  getProductsById(){
    this.ps.getProductsById(this.idtofetch).subscribe(data =>{
      this.products=data;
    });
  }
  ngOnInit() {
    this.getProducts();
    console.log(this.products);
  
  }
  editProduct(id):void {
    this.router.navigate(['editproduct',id]);
  }
  deleteProduct(id):void {
    this.router.navigate(['deleteproduct',id]);
  }
  addProduct():void {
    this.router.navigate(['home']);
  }
  productDetails(id):void{
    this.router.navigate(['productdetails',id]);
  }
  ngAfterViewInit(){
    setTimeout(()=>
    this.ps.getProducts().subscribe(data =>
      {
        this.products=data;
        console.log(data);
      }),200)

  }


}
