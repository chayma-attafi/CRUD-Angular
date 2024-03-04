import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CommentPost } from 'src/app/models/CommentPost';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private _refresh$ = new Subject<void>();
  private piURL = "http://localhost:9092/COCO" ;
   constructor(private http: HttpClient) { }
  /******** Comments **********/

  addComment(post: CommentPost) : Observable<any>{
    return this.http.post("http://localhost:9092/COCO/addCommentPost", post);
  
  }
  getCommentList(): Observable<CommentPost[]> {
    return this.http.get<CommentPost[]>("http://localhost:9092/COCO/retrieveAllCommentPost");
  }

  updateComment(idComment: number, value: any): Observable<Object> {
    return this.http.put("http://localhost:9092/COCO/updateCommentPost", value);
  }
  getComment(idComment: number): Observable<any> {
    return this.http.get(`http://localhost:9092/COCO/retrieveCommentPost/${idComment}`);
  }
  deleteComment(idComment: number): Observable<any> {
    return this.http.delete(`http://localhost:9092/COCO/removeCommentPost/${idComment}`, { responseType: 'text' });
  }
  getCommentsForPost(postId: number): Observable<CommentPost[]> {
    return this.http.get<CommentPost[]>(`http://localhost:9092/COCO/getCommentsForPost/${postId}`);
  }
  

}
