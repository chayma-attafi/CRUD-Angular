import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private _refresh$ = new Subject<void>();
 private piURL = "http://localhost:9092/COCO" ;
  constructor(private http: HttpClient) { }
/******** Posts **********/
  addPost(post: Post) : Observable<any>{
    return this.http.post("http://localhost:9092/COCO/addPost", post);
  
  }
  getPostList(): Observable<Post[]> {
    return this.http.get<Post[]>("http://localhost:9092/COCO/retrieveAllPost");
  }

  updatePost(idPost: number, value: any): Observable<Object> {
    return this.http.put("http://localhost:9092/COCO/updatePost", value);
  }
  getPost(idPost: number): Observable<any> {
    return this.http.get(`http://localhost:9092/COCO/retrievePost/${idPost}`);
  }
  deletePost(idPost: number): Observable<any> {
    return this.http.delete(`http://localhost:9092/COCO/removePost/${idPost}`, { responseType: 'text' });
  }

  /******** Reacts **********/

  
}
