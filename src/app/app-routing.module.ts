import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './layout/admin-layout/add/add.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AddPostComponent } from './layout/admin-layout/admin-post/add-post/add-post.component';
import { AdminPostComponent } from './layout/admin-layout/admin-post/admin-post.component';
import { UpdatePostComponent } from './layout/admin-layout/admin-post/update-post/update-post.component';
import { EditComponent } from './layout/admin-layout/edit/edit.component';
import { WebsiteLayoutComponent } from './layout/website-layout/website-layout.component';
import { AboutComponent } from './page/about/about.component';
import { BlogComponent } from './page/about/blog/blog.component';
import { DetaiBlogComponent } from './page/about/blog/detai-blog/detai-blog.component';
import { ContactComponent } from './page/contact/contact.component';
import { DetailComponent } from './page/work/detail/detail.component';
import { WorkComponent } from './page/work/work.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductComponent } from './product/product.component';
import { AdminGuard } from './services/guards/admin.guard';
const routes: Routes = [  
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"blog",component:BlogComponent},
  {path:"blog/:id",component:DetaiBlogComponent},
  {path:"",component:WebsiteLayoutComponent},
  {path:"work",component:WorkComponent},
  {path:"work/:id",component:DetailComponent},
  {path:"admin",component:AdminLayoutComponent},
  {path:"admin/post",component:AdminPostComponent},
  {path:"admin/post/add",component:AddPostComponent}, 
  {path:"admin/post/:id/edit",component:UpdatePostComponent},
  {path:"admin/add",component:AddComponent},
  {path:"admin/:id/edit",component:EditComponent}
  // {
  //   path:"products",children:[
  //     {path:"" ,redirectTo:"list",pathMatch:"full"},
  //     {path:"list",component:ProductComponent },
  //     {path:":id", component: ProductDetailComponent },
  //     {path :"add",component:ProductAddComponent},
  //     {path:":id/edit",component:ProductEditComponent}
  //   ]
  // },
  
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
