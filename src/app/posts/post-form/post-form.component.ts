import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SecurityContext,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
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

  private readonly isHexColor = Validators.pattern(/^#[0-9A-Fa-f]{6}$/);
  private readonly isUrl = Validators.pattern(
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
  );

  postForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    author: new FormControl('', [Validators.required, Validators.minLength(3)]),
    image: new FormControl<undefined | string>(undefined, this.isUrl),
    content: new FormControl<SafeHtml | string>('', [
      Validators.required,
      Validators.minLength(50),
    ]),
    titleColor: new FormControl('#000000', [
      Validators.required,
      this.isHexColor,
    ]),
    backgroundColor: new FormControl('#ffffff', [
      Validators.required,
      this.isHexColor,
    ]),
  });

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    if (!this.post) {
      return;
    }
    const { title, author, image, content, titleColor, backgroundColor } =
      this.post;
    this.postForm.patchValue({
      title,
      author,
      titleColor,
      backgroundColor,
      content: this.sanitizer.bypassSecurityTrustHtml(content),
    });
    if (image) {
      this.postForm.patchValue({ image });
    }
  }

  onFormSubmit() {
    const { title, author, image, content, titleColor, backgroundColor } =
      this.postForm.value;
    const postData: PostDto = {
      title: title!,
      author: author!,
      titleColor: titleColor!,
      backgroundColor: backgroundColor!,
      // content might be a SafeHtmlImpl object if control is not dirty
      content: this.postForm.controls.content.dirty
        ? (content as string)
        : (this.sanitizer.sanitize(SecurityContext.HTML, content!) as string),
    };
    // image should not have the value null in the post data object
    if (image && image.trim() !== '') {
      postData.image = image;
    }
    this.onSubmit.emit(postData);
  }
}
