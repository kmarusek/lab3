import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(
    private service: ApiService
  ) { }

  posts: [];

  

  ngOnInit() {
    this.service.getPosts().subscribe((response : any ) => this.posts = response.data.children );
  } 

}
