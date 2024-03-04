import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForumModule } from './Forum/forum.module';
import { RoutsModule } from './RoutsAndBelanSheet/routs.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ForumModule, //post + comment + react
    RoutsModule, // routs + cars + blanSheet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
