import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HelloComponent } from './hello/hello.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { AboutComponent } from './page/about/about.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { BlogComponent } from './page/about/blog/blog.component';
import { WebsiteLayoutComponent } from './layout/website-layout/website-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { WorkComponent } from './page/work/work.component';
import { EditComponent } from './layout/admin-layout/edit/edit.component';
import { DeleteComponent } from './layout/admin-layout/delete/delete.component';
import { AddComponent } from './layout/admin-layout/add/add.component';
import { DetailComponent } from './page/work/detail/detail.component';
import { DetaiBlogComponent } from './page/about/blog/detai-blog/detai-blog.component';
import { AdminPostComponent } from './layout/admin-layout/admin-post/admin-post.component';
import { AddPostComponent } from './layout/admin-layout/admin-post/add-post/add-post.component';
import { DeletePostComponent } from './layout/admin-layout/admin-post/delete-post/delete-post.component';
import { UpdatePostComponent } from './layout/admin-layout/admin-post/update-post/update-post.component';
import { ContactComponent } from './page/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HelloComponent,
    ProductAddComponent,
    AboutComponent,
    ProductDetailComponent,
    ProductEditComponent,
    BlogComponent,
    WebsiteLayoutComponent,
    AdminLayoutComponent,
    WorkComponent,
    EditComponent,
    DeleteComponent,
    AddComponent,
    DetailComponent,
    DetaiBlogComponent,
    AdminPostComponent,
    AddPostComponent,
    DeletePostComponent,
    UpdatePostComponent,
    ContactComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
