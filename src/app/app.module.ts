import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerdataComponent } from './passengerdata/passengerdata.component';
import { UsdataComponent } from './usdata/usdata.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { UserdataComponent } from './userdata/userdata.component';
import { TodoComponent } from './todo/todo.component';
import { QuotesComponent } from './quotes/quotes.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component'


const myroute:Routes=[

    {
      path:"",
      component:PassengerdataComponent
    },
    {
      path:"us",
      component:UsdataComponent
    },
    {
      path:"info",
      component:UserinfoComponent
    },
    {
      path:"plist",
      component:ProductlistComponent
    },
    {
      path:"udata",
      component:UserdataComponent
    },
    {
      path:"todo",
      component:TodoComponent
    },
    {
      path:"quotes",
      component:QuotesComponent
    }

]


@NgModule({
  declarations: [
    AppComponent,
    PassengerdataComponent,
    UsdataComponent,
    UserinfoComponent,
    ProductlistComponent,
    UserdataComponent,
    TodoComponent,
    QuotesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
