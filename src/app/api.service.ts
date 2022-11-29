import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  passenger=()=>{
    return this.http.get("https://api.instantwebtools.net/v1/passenger?page=0&size=30")
  }

  plist=()=>{
    return this.http.get("https://dummyjson.com/products")
  }

  quote=()=>{
    return this.http.get("https://dummyjson.com/quotes")
  }

  todo=()=>{
    return this.http.get("https://dummyjson.com/todos")
  }

  usdata=()=>{
    return this.http.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
  }

  user=()=>{
    return this.http.get("https://reqres.in/api/users?page=1")
  }

  userdata=()=>{
    return this.http.get("https://dummyjson.com/users")
  }

}
