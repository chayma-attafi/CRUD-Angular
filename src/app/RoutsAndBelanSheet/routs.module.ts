import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCarComponent } from './Cars/add-car/add-car.component';
import { EditCarComponent } from './Cars/edit-car/edit-car.component';
import { ListCarComponent } from './Cars/list-car/list-car.component';
import { AddRouteComponent } from './Route/add-route/add-route.component';
import { EditRouteComponent } from './Route/edit-route/edit-route.component';
import { ListRouteComponent } from './Route/list-route/list-route.component';
import { AddBlanComponent } from './BlanSheet/add-blan/add-blan.component';
import { EditBlanComponent } from './BlanSheet/edit-blan/edit-blan.component';
import { ListBlanComponent } from './BlanSheet/list-blan/list-blan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../Forum/not-found/not-found.component';

const BlanRoutes: Routes = [
//  {path: "ListPost",component:PostComponent},
 // {path: "AddPost",component:AddPostComponent},
 // { path: "editPost/:idPost", component: EditPostComponent }, // Include the idPost parameter
  {path: "**", component:NotFoundComponent}
  
];

@NgModule({
  declarations: [
    AddCarComponent,
    EditCarComponent,
    ListCarComponent,
    AddRouteComponent,
    EditRouteComponent,
    ListRouteComponent,
    AddBlanComponent,
    EditBlanComponent,
    ListBlanComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(BlanRoutes) // Utilisez RouterModule.forChild() pour les modules enfants
    
  ],
  exports: [RouterModule] // Exportez RouterModule pour que les routes soient accessibles depuis AppModule
})
export class RoutsModule { }
