import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import {  ProductdetailsComponent } from './productdetails/productdetails.component';

import { RouterModule, Routes } from '@angular/router';
import { ProductService } from './product.service';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ProductFilterPipe } from './productfilter.pipe';


const productroutes: Routes = [
  {path:'home',component:ListproductComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'editproduct/:id',component:EditproductComponent},
  {path:'deleteproduct/:id',component:DeleteproductComponent},
  {path:'productdetails/:id',component:ProductdetailsComponent},

];

@NgModule({
  declarations: [AddproductComponent,
     EditproductComponent,
     ListproductComponent, 
     DeleteproductComponent, 
     ProductFilterPipe,
     ProductdetailsComponent,
     ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(productroutes)
  ],
  providers: [ProductService],
})
export class ProductsModule { }
