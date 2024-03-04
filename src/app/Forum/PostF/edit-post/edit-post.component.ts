import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {
  idPost!: number;
  posts!: Post;
  myForm!: FormGroup;

  constructor(private f: FormBuilder, private s: PostService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.myForm = this.f.group({
      postTitle: ['', [Validators.required, Validators.minLength(7)]],
      body: ['', [Validators.required, Validators.minLength(15)]]});

    this.idPost = this.route.snapshot.params['idPost'] 

    this.route.params.subscribe(params => {
      this.idPost = params['idPost'];
      this.fetchPostData();
    });
  }
  fetchPostData() {
    this.s.getPost(this.idPost).subscribe({
      next: (data: Post) => {
        this.posts = data;
        this.myForm.patchValue({
          postTitle: this.posts.postTitle,
          body: this.posts.body
        });
      },
      error: (error) => {
        console.log('Error fetching post data:', error);
      }
    });
  }
  get postTitle(){
    return this.myForm.get('postTitle')
  }
  get body(){
    return this.myForm.get('body')
  }

  onSubmit() {
    // Update the existing post object with form values
    this.posts.postTitle = this.postTitle.value;
    this.posts.body = this.body.value;
    this.posts.createdAt = new Date();
    
    // Call the updatePost method with the updated post object
    this.s.updatePost(this.idPost, this.posts).subscribe(() => {
      this.gotoList();
    });
  }
  

  gotoList() {
    this.router.navigate(['/ListPost']);
  }
}
