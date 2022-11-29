import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerdataComponent } from './passengerdata/passengerdata.component';
import { UsdataComponent } from './usdata/usdata.component';
import { UserinfoComponent } from './userinfo/userinfo.component';


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
    }

]


@NgModule({
  declarations: [
    AppComponent,
    PassengerdataComponent,
    UsdataComponent,
    UserinfoComponent
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
