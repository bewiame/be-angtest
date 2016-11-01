import { Component, OnInit } from '@angular/core';
import {AppComponent1} from './app.component1';
import {FriendComponent} from '../friend/friend.component';
import { FriendService } from '../friend/friend.service';

@Component({
 selector: 'my-app',
 directives: [AppComponent1],
 templateUrl: 'app/component/app.component.html',
})

// Main component
// include a component1 (with component2)
export class AppComponent implements OnInit {
    errorCount=0;
    componentName: 'AppComponent';

    ngOnInit() {
      this.setError(5);
    }

    setError(nbr) {
      this.errorCount=nbr;
    }

  }
