import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { StarComponent } from './shared/star.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { ProductService } from './products/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', component: ProductDetailComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**',  redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule { }
