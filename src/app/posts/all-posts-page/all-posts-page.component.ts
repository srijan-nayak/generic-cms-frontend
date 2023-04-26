import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import Post from '../models/post';

@Component({
  selector: 'app-all-posts-page',
  templateUrl: './all-posts-page.component.html',
})
export class AllPostsPageComponent implements OnInit {
  posts?: Post[];

  constructor(private readonly postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPosts().subscribe((posts) => (this.posts = posts));
  }
}
