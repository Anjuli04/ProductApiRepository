import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {

  productidtodelete="1";
  constructor(private ps:ProductService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe((data)=>{
      this.productidtodelete=data.id;
    });
  }
  deleteProduct(){
    this.ps.deleteProduct(this.productidtodelete).subscribe(data => {
      console.log(data);
    })
    alert("Data Deleted");
    this.router.navigate(['home']);

  }

}
