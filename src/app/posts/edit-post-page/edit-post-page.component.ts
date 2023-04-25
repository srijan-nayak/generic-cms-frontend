import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import Post from '../models/post';
import PostDto from '../models/post-dto';

@Component({
  selector: 'app-edit-post-page',
  templateUrl: './edit-post-page.component.html',
})
export class EditPostPageComponent implements OnInit {
  postId?: string;
  post?: Post;

  constructor(
    private readonly postsService: PostsService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.postId = params['postId'];
      this.postsService
        .getPost(this.postId!)
        .subscribe((post) => (this.post = post));
    });
  }

  onFormSubmit(postData: PostDto) {
    this.postsService
      .editPost(this.postId!, postData)
      .subscribe((_post) => this.router.navigate(['..']));
  }

  onDelete() {
    this.postsService
      .deletePost(this.postId!)
      .subscribe((_post) => this.router.navigate(['..']));
  }
}
