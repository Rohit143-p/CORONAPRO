import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServercallService {
  public status: BehaviorSubject<any> = new BehaviorSubject<any>(false)
  url:"https://api.covid19india.org/travel_history.json"
  constructor(private http:HttpClient) { }
public getdat():Observable<any>{
  return this.http.get(this.url)

}
display(value:boolean){
  this.status.next(value)

}
}
