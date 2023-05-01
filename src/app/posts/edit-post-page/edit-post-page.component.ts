import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import Post from '../models/post';
import PostDto from '../models/post-dto';
import { AlertsService } from '../../alert/services/alerts.service';

@Component({
  selector: 'app-edit-post-page',
  templateUrl: './edit-post-page.component.html',
})
export class EditPostPageComponent implements OnInit {
  postId?: string;
  post?: Post;

  constructor(
    private readonly postsService: PostsService,
    private readonly alertsService: AlertsService,
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
      .subscribe((_post) => this.alertsService.createAlert('Post edited!'));
  }

  onDelete() {
    this.postsService.deletePost(this.postId!).subscribe(async (_post) => {
      this.alertsService.createAlert('Post deleted!');
      await this.router.navigate(['..']);
    });
  }
}
