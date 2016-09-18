import { Component } from '@angular/core';
import {AppComponent2} from './app.component2';

@Component({
 selector: 'my-app1',
 directives: [AppComponent2],
 templateUrl: 'app/component/app.component1.html',
 styleUrls: ['app/component/app.component1.css'],
})

// Simple component with html defined in component
// include component2
export class AppComponent1 {
  componentName: 'AppComponent1';
}
