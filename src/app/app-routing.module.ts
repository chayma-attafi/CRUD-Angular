import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Forum/not-found/not-found.component';
import { AddPostComponent } from './Forum/PostF/add-post/add-post.component';
import { PostComponent } from './Forum/PostF/post/post.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
