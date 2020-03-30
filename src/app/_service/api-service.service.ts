import { Injectable } from '@angular/core';
import { Configration } from '../model/configration';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

Config = new Configration();

  constructor(private http:HttpClient) { }

  registerUser(user:any){
    return this.http.post(this.Config.url+'/signup',user);
  }

  login(user:any){
   return this.http.post(this.Config.url+'/login',user);
  }
}
