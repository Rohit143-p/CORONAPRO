import { Component, OnInit } from '@angular/core';
import { ServercallService } from 'src/app/services/servercall.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  public result:any;
  constructor(private server:ServercallService, private http: HttpClient) { }

  ngOnInit(): void {
   
    
    this.http.get("https://api.covid19api.com/summary").subscribe((pos)=>{
      this.result=pos
    // console.log(pos);
    // console.log(pos['Global']['NewConfirmed'])
    // console.log(pos.Countries[0])
    
    }, (err)=>{
      console.log(err);
    })
  }

}
