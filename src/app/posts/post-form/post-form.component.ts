import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Post from '../models/post';
import PostDto from '../models/post-dto';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
})
export class PostFormComponent implements OnInit {
  @Input()
  post?: Post; // for filling a form with existing data

  @Output()
  onSubmit = new EventEmitter<PostDto>();

  postForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    author: new FormControl('', [Validators.required, Validators.minLength(3)]),
    image: new FormControl<undefined | string>(
      undefined,
      Validators.pattern(
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
      )
    ),
    content: new FormControl('', [
      Validators.required,
      Validators.minLength(50),
    ]),
  });

  ngOnInit() {
    if (!this.post) {
      return;
    }
    const { title, author, image, content } = this.post;
    this.postForm.setValue({
      title: title,
      author: author,
      image: image,
      content: content,
    });
  }

  onFormSubmit() {
    const { title, author, image, content } = this.postForm.value;
    const postData: PostDto = {
      title: title!,
      author: author!,
      content: content!,
    };
    // image should not have the value null in the post data object
    if (image && image.trim() !== '') {
      postData.image = image;
    }
    this.onSubmit.emit(postData);
  }
}
