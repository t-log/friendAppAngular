import { Component } from '@angular/core';

@Component({
  selector: 'app-search-friend',
  templateUrl: './search-friend.component.html',
  styleUrls: ['./search-friend.component.css']
})
export class SearchFriendComponent {
  name=""

  searchFriend = () =>
  {
    let searchData:any = {"name":this.name} 
    console.log(searchData)
  }
}
