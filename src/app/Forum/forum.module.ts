import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './PostF/post/post.component';
import { ReactPostComponent } from './react-post/react-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddCommentComponent } from './CommentPost/add-comment/add-comment.component';
import { EditCommentComponent } from './CommentPost/edit-comment/edit-comment.component';
import { ListCommentComponent } from './CommentPost/list-comment/list-comment.component';
import { AddPostComponent } from './PostF/add-post/add-post.component';
import { EditPostComponent } from './PostF/edit-post/edit-post.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';


const forumRoutes: Routes = [
  {path: "ListPost",component:PostComponent},
  {path: "AddPost",component:AddPostComponent},
  { path: "editPost/:idPost", component: EditPostComponent }, // Include the idPost parameter
  {path: "**", component:NotFoundComponent}
  
];
@NgModule({
  declarations: [
    PostComponent,
    ReactPostComponent,
    AddCommentComponent,
    EditCommentComponent,
    ListCommentComponent,
    AddPostComponent,
    EditPostComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(forumRoutes) // Utilisez RouterModule.forChild() pour les modules enfants
  ],
  exports: [RouterModule] // Exportez RouterModule pour que les routes soient accessibles depuis AppModule
})
export class ForumModule { }
