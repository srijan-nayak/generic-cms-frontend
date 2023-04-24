import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import Post from '../../models/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private readonly postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPosts().subscribe((posts) => (this.posts = posts));
  }
}
