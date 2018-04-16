import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(private userService: UserService, private auth: AuthService, router: Router){
    auth.user$.subscribe(user=>{
      if (!user) return;
      userService.save(user);
      let returnUrl = localStorage.getItem('returnUrl');
      
      if (!returnUrl) return;
      
      localStorage.removeItem('returnUrl')
      router.navigateByUrl(returnUrl);

      
      
    });
  }
}

//ngOnDestroy(): void {
  //this.subscription.unsubscribe();
  //}
  //courses: any[];
  //subscription: Subscription
  //db: AngularFireDatabase
  //this.subscription = db.list('/courses')
  //.valueChanges().subscribe(
    // response=>{
      // console.log(response);
      //this.courses=response;
      //});