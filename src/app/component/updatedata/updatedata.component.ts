import { Component, OnInit } from '@angular/core';
import { ServercallService } from 'src/app/services/servercall.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-updatedata',
  templateUrl: './updatedata.component.html',
  styleUrls: ['./updatedata.component.css']
})
export class UpdatedataComponent implements OnInit {
  public result:any;
  constructor(private server:ServercallService, private http: HttpClient) { }

  ngOnInit(): void {
    this.server.display(true)
     this.getdata()
    
  }
  getdata(){
    this.http.get("https://api.covid19api.com/summary").subscribe((pos)=>{
      this.result=pos
      this.server.display(false)
    // console.log(pos);
    // console.log(pos['Global'])
    // console.log(pos.Countries[0])
    
    }, (err)=>{
      console.log(err);
    })
  }
  }


