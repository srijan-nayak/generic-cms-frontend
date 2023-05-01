import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import PostDto from '../models/post-dto';
import {AlertsService} from "../../alert/services/alerts.service";

@Component({
  selector: 'app-new-post-page',
  templateUrl: './new-post-page.component.html',
})
export class NewPostPageComponent {
  constructor(
    private readonly postsService: PostsService,
    private readonly alertsService: AlertsService,
    private readonly router: Router
  ) {}

  async onFormSubmit(postData: PostDto) {
    console.log(postData);
    this.postsService.createPost(postData).subscribe(async (_post) => {
      this.alertsService.createAlert('Post created!');
      await this.router.navigate(['..']);
    });
  }
}
