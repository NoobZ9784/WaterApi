import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReqResService {

  constructor() { }

  loading:boolean;
  setLoading(load:boolean){
    this.loading = load
    console.log("setted");
    
  }

  postBarBtns:any=[
    {
      "id":1,
      "name":"Authentication",
      "type":"postBarNotAvl"
    },
    {
      "id":2,
      "name":"Headers",
      "type":"postBarNotAvl"
    },
    {
      "id":3,
      "name":"Body",
      "type":"postBarBody",
      "subBtns":[
        {
          "id":1,
          "name":"form-data",
          "type":"form"
        },
        {
          "id":2,
          "name":"Raw Data",
          "type":"raw"
        },
      ]
    },
  ]
}
