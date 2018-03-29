import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  // users = [];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getUsers()
  }

  onEdit(_id: String) {
    this._userService.getUser(_id);
  }

  onDelete(_id) {
    if (confirm('Are you sure to delete this?') === true) {
      this._userService.deleteUser(_id)
        .subscribe(x => {
          this._userService.getUsers();
        });
    }
  }

}
