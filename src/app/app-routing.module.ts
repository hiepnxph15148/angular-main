import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './page/about/about.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { AdminGuard } from './services/guards/admin.guard';

const routes: Routes = [  
  {path:"about",component:AboutComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {
    path:"products",children:[
      {path:"" ,redirectTo:"list",pathMatch:"full"},
      {path:"list",component:ProductComponent },
      {path:":id", component: ProductDetailComponent },
      {path :"add",component:ProductAddComponent},
      {path:":id/edit",component:ProductEditComponent}
    ]
  },
  
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
