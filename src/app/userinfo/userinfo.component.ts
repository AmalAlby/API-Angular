import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent {

  constructor(private api:ApiService){

    api.user().subscribe(

      (result)=>{
        this.info=result;
      }
    )

  }

  info:any=[]

}
