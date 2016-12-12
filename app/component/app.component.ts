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
    title = 'My test (For)';
    heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    myHero = this.heroes[0];

    ngOnInit() {
      this.setError(5);
    }

    changeMyHero(num) {
      this.myHero=this.heroes[num];
    }

    setError(nbr) {
      this.errorCount=nbr;
    }

  }
