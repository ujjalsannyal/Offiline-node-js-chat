import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  user: any = {
    messages: []
  };
  constructor() { }

  ngOnInit() { }

  onSelctUser(user){
    this.user = user;
    console.log("user: ", this.user);
  }

  isSelf(createdBy){
    console.log(createdBy, this.user.id);
    return this.user.id != createdBy;
  }
}
