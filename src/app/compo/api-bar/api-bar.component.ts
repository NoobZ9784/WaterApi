import { Component } from '@angular/core';
import { HttpReadyService } from 'src/app/service/http-ready.service';
import { ReqResService } from 'src/app/service/req-res.service';

@Component({
  selector: 'app-api-bar',
  templateUrl: './api-bar.component.html',
  styleUrls: ['./api-bar.component.css']
})
export class ApiBarComponent {
constructor(private httpService:HttpReadyService, private rs:ReqResService){
  this.postBarBtns = rs.postBarBtns;
}

responseData:any;
response:boolean=false;
responseErr:boolean=false;
error:any;
dataCount:number=0;
post:boolean=false;
// clickOnTypeSelectBuffr:boolean=false;
postBarBtns:any=null;
postBarBodyBtns:any=this.rs.postBarBtns[2].subBtns;
jsonCorrect:boolean=true;
textAreaValid:boolean=true;
textAreaValdiationClass:string='borderBlack';

clickOnTypeSelect(type:string){
  // if(this.clickOnTypeSelectBuffr){
    this.post = (type==='post' || type==='update')?true:false;
    // this.clickOnTypeSelectBuffr=false;
  // }else{
    // this.clickOnTypeSelectBuffr=true;
  // }
}
postBarBtnClick(id:number){
  for(var i=0;i<this.postBarBtns.length;i++){
    (document.querySelector('.postBarBtn'+this.postBarBtns[i].id) as HTMLElement).style.backgroundColor = 'rgb(198, 198, 198)';
    (document.querySelector('.'+this.postBarBtns[i].type) as HTMLElement).style.display = 'none';
  }
  (document.querySelector('.postBarBtn'+id) as HTMLElement).style.backgroundColor = 'rgb(223, 223, 223)';
  (document.querySelector('.'+this.postBarBtns[id-1].type) as HTMLElement).style.display = 'block';
  
}
postBarBodyBtnClick(id:number){
  for(let item of this.postBarBodyBtns){
    (document.querySelector('.postBarBodyBtn'+item.id) as HTMLElement).style.backgroundColor = 'rgb(223, 223, 223)';
    (document.querySelector('.'+item.type)as HTMLElement).style.display='none';
  }
  (document.querySelector('.postBarBodyBtn'+id) as HTMLElement).style.backgroundColor = 'white';
  (document.querySelector('.'+this.postBarBodyBtns[id-1].type)as HTMLElement).style.display='block';
}
textAreaJsonValidate(data:string){
  try{
    JSON.parse(data);
    this.textAreaValid=true;
    this.textAreaValdiationClass='borderBlack';
  }catch(err){
    this.textAreaValid=false;
    this.textAreaValdiationClass='borderRed';
  }

}


 getApiData(type:string,url:string,postJsonData:string){
  this.rs.setLoading(true)
  this.response=false;
  this.responseData='';
  this.responseErr=false;
  try{
    new URL(url)
  }catch(err){
    alert("Enter Valid Url")
  }
  if(type==='get'){
    this.getRequest(url);
  }else if(type==='post'){
    this.postRequest(url,postJsonData);
  }else if(type==='update'){
    this.updateRequest(url,postJsonData);
  }else if(type==='delete'){
    this.deleteRequest(url);
  }else{
    alert("Unknown request type")
  }
 }


 getRequest(url:string){
  this.httpService.getRequests(url).subscribe((data:any)=>{
    this.responseData = data;
    this.dataCount = data.length;
    this.response = true;
    this.rs.setLoading(false)
  },error=>{
    this.error = error;
    this.responseData = error;
    this.responseErr = true;
    this.response = true;
    this.dataCount = 1;
    alert("Error Occured");
    this.rs.setLoading(false)
  })
}


postRequest(url:string,json:string){
  if(this.textAreaValid && json===''){
    this.rs.setLoading(false)
    alert("Enter Something in Post Json Data");
  }else if(this.textAreaValid){
    this.rs.setLoading(false)
    this.httpService.postRequests(url,json).subscribe((data:any)=>{
      this.responseData = data;
      this.dataCount = data.length;
      this.response = true;
    },error=>{
      this.rs.setLoading(false)
      this.error = error;
      this.responseData = error
      this.responseErr = true
      this.dataCount = 1
    })
  }else if(!this.textAreaValid){
    this.rs.setLoading(false)
    alert("JSON Syntax error");
  }
  else{
    this.rs.setLoading(false)
    alert("Unknown JSON error");
  }
 }

 updateRequest(url:string,json:string){

 }
 deleteRequest(url:string){

 }

 
}
