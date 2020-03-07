import { BookComponent } from './books/book/book.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './login/signup/signup.component';
import { BookpageComponent } from './pages/bookpage/bookpage.component';
import { SigninComponent } from './login/signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: SigninComponent},
  {path: 'books', component: BookComponent},
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
