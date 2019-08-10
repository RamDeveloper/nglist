import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = null;
  title = 'Tours';
  topics: AngularFireList<any>;
  constructor(private auth: AuthService, public db: AngularFireDatabase) { }
  ngOnInit() {
    this.auth.getAuthState().subscribe(
      (user) => this.user = user);
      //console.log(this.db);
    this.topics = (this.db.list('/employees'));
    console.log(this.topics);
    return this.topics;
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }
}
