import { Component } from '@angular/core';
import { FriendService } from './friend.service';

@Component({
  selector: 'my-friends',
  providers : [FriendService],
  templateUrl: 'app/friend/friend.component.html',
  styleUrls: ['app/friend/friend.component.css'],
})
export class FriendComponent {
  componentName: 'FriendComponent';
  friends:Array<any>;
  componentNameVar = 'FriendComponent';

  //Assign
    constructor(_friendService: FriendService) {
    this.friends = _friendService.getFriends();
  }
}
