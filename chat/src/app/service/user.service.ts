import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getData(){
    const httpOptions = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    //Tested API// Working fine.
    // return this.http.get( 'https://jsonplaceholder.typicode.com/posts/1', httpOptions)
    //Provided API does notworking. API ISSUE.
    // return this.http.get( 'http://demo4842709.mockable.io/users', httpOptions)

    const data = [{"id":"12","user":"Ryan Smith","img":"https://randomuser.me/api/portraits/women/16.jpg","messages":[{"id":0,"text":"Hi, Mamatha. How are you?","created":"Fri, 14 Jul 2017 09:56:37 GMT","createdBy":0},{"id":0,"text":"Hello, Ryan Smith. I'm Fine","created":"Fri, 15 Jul 2017 09:56:37 GMT","createdBy":12},{"id":0,"text":"Hello, Ryan Smith. I'm Fine","created":"Fri, 15 Jul 2017 09:56:37 GMT","createdBy":12},{"id":0,"text":"Hello, Ryan Smith. I'm Fine","created":"Fri, 15 Jul 2017 09:56:37 GMT","createdBy":12}]},{"id":"2","user":"Bertha\tKeller","img":"https://randomuser.me/api/portraits/women/73.jpg","messages":[]},{"id":"3","user":"Marian\tHarris","img":"https://randomuser.me/api/portraits/women/12.jpg","messages":[]},{"id":"4","user":"Chester Dixon","img":"https://randomuser.me/api/portraits/women/66.jpg","messages":[]}];
    return data;
  }
}
