import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  _url = "https://www.reddit.com/r/aww/.json"
  
  constructor(
    private http : HttpClient,
  ) { }

  getPosts(){
    return this.http.get(this._url);
  }
}
