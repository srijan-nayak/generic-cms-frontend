import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostsPageComponent } from './posts/all-posts-page/all-posts-page.component';

const routes: Routes = [
  { path: 'posts', component: AllPostsPageComponent },
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  { path: '**', redirectTo: 'posts' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
