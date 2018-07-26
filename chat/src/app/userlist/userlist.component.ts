import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  userlist: any;
  selected: any;
  @Output()
  selectuser = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.userService.getData().subscribe((res) => {
    //   console.log(res);
    // });

    this.userlist = this.userService.getData();
    console.log("this.userlist: ", this.userlist);
  }

  activeChat(event, id, index){
    console.log(event, id, index);
    this.selected = id;
    this.selectuser.emit(this.userlist[index]);
  }
  isActive(c){
    return this.selected === c;
  }

}
