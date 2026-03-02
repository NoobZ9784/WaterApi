import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpReadyService {

  constructor(private http:HttpClient) { }

  getRequests(url:string){
    return this.http.get(url)
  }
  postRequests(url:string,strJson:string){
    let json = JSON.parse(strJson);
    console.log(json);
    return this.http.post(url,json);
  }
}
