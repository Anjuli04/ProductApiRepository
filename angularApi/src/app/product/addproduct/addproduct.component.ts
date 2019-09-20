import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../Entities/Product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  addProductForm:FormGroup;
  product: Product;
  constructor(private route:ActivatedRoute,private ps:ProductService,private router:Router,private fb:FormBuilder) { }

  ngOnInit() {
    this.addProductForm=new FormGroup({
      ProductID:new FormControl(),
      Title:new FormControl(),
      Price: new FormControl(),
      Color:new FormControl(),
      Quantity:new FormControl(),
      Details:new FormControl(),
      ExpiryDate:new FormControl(),
      ImageURL:new FormControl(),
      InStock:new FormControl(Boolean),
      Rating:new FormControl()
    })
    this.addProductForm.setValue({
      ProductID:"",
      Title:"",
      Price:"",
      Color:"",
      Quantity:"",
      Details:"",
      ExpiryDate:"",
      ImageURL:"",
      InStock:"",
      Rating:""
        })
  }
  setDefault(){
    this.addProductForm.setValue({
      ProductID:"",
      Title:"",
      Price:"",
      Color:"",
      Quantity:"",
      Details:"",
      ExpiryDate:"",
      ImageURL:"",
      InStock:"",
      Rating:""
        })

  }
  addProduct(){
    console.log(this.addProductForm.value);
    this.addProductForm.value
    this.ps.addProduct(this.addProductForm.value).subscribe(data=>{
      this.product=data;
      console.log(this.product);
    });
    this.router.navigate(['home']);
  }
  Goback():void{
    this.router.navigate(['home'])
  }
  

}
