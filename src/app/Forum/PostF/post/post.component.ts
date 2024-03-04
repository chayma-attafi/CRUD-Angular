import { Component } from '@angular/core';
import { map, Observable } from "rxjs";
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import * as bootstrap from 'bootstrap';
import { PostService } from '../../services/post.service';
import { CommentPost } from 'src/app/models/CommentPost';
import { CommentService } from '../../services/comment.service';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']

})
export class PostComponent {

  posts!: Observable<Post[]>;
  commentList: Observable<CommentPost[]>;

  idTodelete: number = 0;
  deleteModal: any;


  constructor(private postService:PostService,private router: Router,private commentService:CommentService) {}

  ngOnInit() {
    const modalElement = document.getElementById('deleteModal');
    if (modalElement) {
      this.deleteModal = new bootstrap.Modal(modalElement);
    } else {
      console.error("Delete modal element not found.");
    }
    this.reloadData();
  }

  reloadData() {
    this.posts = this.postService.getPostList();
  }
  updatePost(idPost: number){
    this.router.navigate(['update', idPost]);
  }
  //deletePost(idPost: number) {
   /* this.postService.deletePost(idPost)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));}*/
  

  deletePost(idPost: number) {
    this.idTodelete = idPost;
    this.deleteModal.show();
  }
 
  delete() {
    this.postService.deletePost(this.idTodelete).subscribe({
      next: () => {
        this.reloadData();
        this.deleteModal.hide();
      },
      error: (error) => {
        console.error('Error deleting post:', error);
        // Handle error, show error message, etc.
      }
    });
  }

  // Function to check if there are comments for a post
  hasComments(post: Post): Observable<boolean> {
    return this.commentService.getCommentsForPost(post.idPost).pipe(
      map(comments => !!comments && comments.length > 0)
    );
  }
  
  

  
  
  // Add this property to your component
currentPostIdWithVisibleComments: number | null = null;

showComments(post: Post): void {
  // Check if comments are available for the post
  this.hasComments(post).subscribe(hasComments => {
    if (hasComments) {
      // Assign the commentList only if comments are available
      this.currentPostIdWithVisibleComments = post.idPost;
      this.commentList = this.commentService.getCommentsForPost(post.idPost);
    } else {
      // If no comments available, set currentPostIdWithVisibleComments to null
      this.currentPostIdWithVisibleComments = null;
    }
  });
}



  
  
}
