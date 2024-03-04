import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  myForm!: FormGroup;
  posts: Post = new Post(); 


  constructor(private f: FormBuilder,private s: PostService,private router: Router) { 
    
  }

  ngOnInit(): void {
    this.myForm = this.f.group({
      postTitle: ['', [Validators.required, Validators.minLength(7)]],
      body: ['', [Validators.required, Validators.minLength(15)]]
    });
    /*this.myForm= new FormGroup({
      postTitle:new FormControl('', [Validators.required,Validators.minLength(7)]), //required : champ obligatoire 
      body:new FormControl('',[Validators.required,Validators.minLength(15)])
    });*/
  }
  
  get postTitle(){
    return this.myForm.get('postTitle')
  }
  get body(){
    return this.myForm.get('body')
  }
onSubmit() {
  let p = new Post();
p.postTitle=this.postTitle.value;
p.body=this.body.value;
p.createdAt = new Date(); // Set current system date
p.nb_Signal = 0;
p.nb_etoil = 0;
console.log(this.myForm.value); // Log the entire post object
console.log(this.posts);
this.s.addPost(p).subscribe(()=>this.myForm.reset()); //pour supprimer le continue apres l'ajjout

this.gotoList();
}
gotoList() {
this.router.navigate(['/ListPost']);
}
}
