import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

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

  constructor(private api:ApiServiceService){}

  readValues = () => {
    let data:any = {"name":this.name,"friendName":this.friendName,"friendNickName":this.friendNickName,"DescribeYourFriend":this.DescribeYourFriend}
    console.log(data)
    this.api.addFriend(data).subscribe(
      (response)=>{console.log(response)}
    )
  }
  

}