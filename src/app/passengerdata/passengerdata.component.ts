import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-passengerdata',
  templateUrl: './passengerdata.component.html',
  styleUrls: ['./passengerdata.component.css']
})
export class PassengerdataComponent {

  constructor(private api:ApiService){

    api.passenger().subscribe(

      (result)=>{
        this.list=result;
      }
    )

  }

  list:any=[]

}
