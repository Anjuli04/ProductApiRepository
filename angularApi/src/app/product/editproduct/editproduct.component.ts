import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../Entities/Product';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  productidtoedit="1";
  producttoedit:Product;
  editProductForm:FormGroup;
  constructor(private route:ActivatedRoute,private ps:ProductService,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe((data)=>{
      this.productidtoedit=data.id;
    });
    console.log(this.productidtoedit);
    //this.productidtoedit=null;
   // console.log(this.producttoedit);
   this.ps.getProductsById(this.productidtoedit).subscribe((data)=>{
    this.producttoedit=data;
    this.setDefault()
  });
   this.editProductForm=new FormGroup(
     {
       ProductID: new FormControl(null, Validators.required),
       Title: new FormControl(null, Validators.required),
       Price: new FormControl(null, Validators.required),
       Color: new FormControl(null, Validators.required),
       inStock: new FormControl(null, Validators.required),
       Quantity: new FormControl(null, Validators.required),
       Rating: new FormControl(null, Validators.required),
       ImageUrl: new FormControl(null, Validators.required),
       Details: new FormControl(null, Validators.required),
       ExpiryDate: new FormControl(null, Validators.required)
      /* ProductID:new FormControl(),
      Title:new FormControl(),
      Price: new FormControl(),
      Color:new FormControl(),
      Quantity:new FormControl(),
      Details:new FormControl(),
      ExpiryDate:new FormControl(),
      ImageURL:new FormControl(),
      InStock:new FormControl(Boolean),
      Rating:new FormControl()*/
       

     }
   )
  }

  setDefault(){
    this.editProductForm.setValue({
      ProductID:this.producttoedit.ProductID,
      Title:this.producttoedit.Title,
      Price:this.producttoedit.Price,
      Color:this.producttoedit.Color,
      inStock:this.producttoedit.inStock,
      Quantity:this.producttoedit.Quantity,
      Rating:this.producttoedit.Rating,
      ImageUrl:this.producttoedit.ImageUrl,
      Details:this.producttoedit.Details,
      ExpiryDate:this.producttoedit.ExpiryDate

    })
  }
  product;
  editProduct(){
    this.route.params.subscribe((data)=>{
      this.productidtoedit=data.id;
      this.ps.editProduct(this.productidtoedit,this.editProductForm.value).subscribe(data1=>{
      this.product=data1
          });
    });
     this.router.navigate(['home']);


  }
  Goback():void{
    this.router.navigate(['home'])
  }


  
}
