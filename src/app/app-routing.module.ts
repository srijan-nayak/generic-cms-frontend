import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostsPageComponent } from './posts/all-posts-page/all-posts-page.component';
import { NewPostPageComponent } from './posts/new-post-page/new-post-page.component';
import { EditPostPageComponent } from './posts/edit-post-page/edit-post-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const titlePrefix = 'Generic CMS - ';

const routes: Routes = [
  {
    path: 'posts',
    component: AllPostsPageComponent,
    title: titlePrefix + 'Manage Posts',
  },
  {
    path: 'posts/new',
    component: NewPostPageComponent,
    title: titlePrefix + 'Create Post',
  },
  {
    path: 'posts/:postId/edit',
    component: EditPostPageComponent,
    title: titlePrefix + 'Edit Post',
  },
  {
    path: '404',
    component: NotFoundPageComponent,
    title: titlePrefix + '404',
  },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
