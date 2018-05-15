import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule , Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';


 
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'read', component: ArticleComponent }  
];

@NgModule({
  declarations: [
    AppComponent,   
    ArticleComponent, HomeComponent, ListComponent 
  ],
  imports: [
    BrowserModule,    
    RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
