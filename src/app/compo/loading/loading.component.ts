import { Component } from '@angular/core';
import { ReqResService } from 'src/app/service/req-res.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
  constructor(private rs:ReqResService){  
    setInterval(()=>{
      this.loading = rs.loading;
    },50)
  }
  loading:boolean = this.rs.loading;

}
