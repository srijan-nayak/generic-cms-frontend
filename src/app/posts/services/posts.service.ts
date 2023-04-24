import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import Post from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>(this.apiUrl + '/posts');
  }
}
