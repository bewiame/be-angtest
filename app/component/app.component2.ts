import { Component } from '@angular/core';
import {OnInit } from '@angular/core';
import {FriendComponent} from '../friend/friend.component';
import { FriendService } from '../friend/friend.service';

@Component({
  selector: 'my-app2',
  directives: [FriendComponent],
  templateUrl: 'app/component/app.component2.html',
  styleUrls: ['app/component/app.component2.css'],
})

export class AppComponent2 implements OnInit {

 // set a variable in the component to see in html page
  toto = 'Hello toto';

  ngOnInit() {

  }

 }
