import { Component } from '@angular/core';

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.css']
})
export class AddFriendsComponent {
  name=""
  friendName=""
  DescribeYourFriend=""
  friendNickName=""

  readValues = () =>
  {
    console.log(this.name);
    console.log(this.friendName);
    console.log(this.DescribeYourFriend);
    console.log(this.friendNickName);
  }
}
