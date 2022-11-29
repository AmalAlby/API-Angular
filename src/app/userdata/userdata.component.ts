import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent {


  constructor(private api:ApiService){

    api.userdata().subscribe(

      (result)=>{
        this.data=result;
      }
    )

  }

  data:any=[]

}
