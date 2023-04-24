import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import Post from '../models/post';
import PostDto from '../models/post-dto';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>(this.apiUrl + '/posts');
  }

  getPost(postId: string) {
    return this.http.get<Post>(this.apiUrl + '/posts/' + postId);
  }

  createPost(postData: PostDto) {
    return this.http.post<Post>(this.apiUrl + '/posts', postData);
  }

  editPost(postId: string, postData: PostDto) {
    return this.http.put<Post>(this.apiUrl + '/posts/' + postId, postData);
  }
}
