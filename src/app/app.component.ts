import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour-and-Travel';
  isAdmin=false;
  currentUser:any=null;
  constructor(private _router: Router) { }
  isActive() {
    const user=localStorage.getItem('currentUser');
    if (user) {
      this.currentUser= user !== null ? JSON.parse(user) : new User();
      if(this.currentUser.email=="my@gmail.com")
        this.isAdmin=true;
      return true;
    }
    return false;
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.isAdmin=false;
    this._router.navigate(['home']);
  }
}
