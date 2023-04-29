import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AllPostsPageComponent } from './posts/all-posts-page/all-posts-page.component';
import { NewPostPageComponent } from './posts/new-post-page/new-post-page.component';
import { CardComponent } from './components/card/card.component';
import { PageHeadingComponent } from './components/page-heading/page-heading.component';
import { PostFormComponent } from './posts/post-form/post-form.component';
import { quillFormats, quillModules } from './quill.config';
import { EditPostPageComponent } from './posts/edit-post-page/edit-post-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavBarComponent,
    PageHeadingComponent,
    CardComponent,
    PostFormComponent,
    AllPostsPageComponent,
    NewPostPageComponent,
    EditPostPageComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    QuillModule.forRoot({
      theme: 'snow',
      modules: quillModules,
      formats: quillFormats,
      format: 'html',
      sanitize: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
