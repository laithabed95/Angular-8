import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors=['Red','Green','Back','Blue'];
  name:string='laith abed';
  currentDate=new Date();
  age=23;
  isAuth:boolean=false;
  LogState:string="Login";


  toggle(){
    this.isAuth=!this.isAuth;
    this.LogState=this.isAuth?"LogOut":"Login";
  }
  
  myfunction(){
    alert('Hiiiii');
  }
  onChange(){
    console.log('Color Changed');
  }
}
