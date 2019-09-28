import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';


const routes: Routes = [
  {
    path:'article',
    component:ArticleComponent,
    pathMatch:'full'
  },
  {
    path:'catigory',
    component:ArticleComponent,
    pathMatch:'full'
  },
  {
    path:'client',
    component:ArticleComponent,
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
