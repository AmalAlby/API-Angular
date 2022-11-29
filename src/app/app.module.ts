import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerdataComponent } from './passengerdata/passengerdata.component';
import { UsdataComponent } from './usdata/usdata.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { ProductlistComponent } from './productlist/productlist.component';


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
    }

]


@NgModule({
  declarations: [
    AppComponent,
    PassengerdataComponent,
    UsdataComponent,
    UserinfoComponent,
    ProductlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
