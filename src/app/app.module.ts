import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AllPostsPageComponent } from './posts/all-posts-page/all-posts-page.component';
import { CardComponent } from './components/card/card.component';
import { PageHeadingComponent } from './components/page-heading/page-heading.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavBarComponent,
    AllPostsPageComponent,
    CardComponent,
    PageHeadingComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
