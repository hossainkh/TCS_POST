import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {
  posts: any[];
  headers: any[];
  private url= 'http://jsonplaceholder.typicode.com/posts';
    constructor(private http: Http) 
    { 
      this.headers=["POST"];
      http.get(this.url)
      .subscribe(response => {
        this.posts = response.json();
      });
    }
 
}
