import { Component } from '@angular/core';
import { CommentPost } from './CommentPost';
import { ReactPost } from './ReactPost';


export class Post { 

 idPost!: number; 
 postTitle: string;
 body: string;
 createdAt:Date;
 nb_Signal:number;
 nb_etoil:number;
 idUser: number; // Relation OneToMany sera modifier apre l'integration
 reactPost:[ReactPost];
 commentPosts:[CommentPost];
 

} 