import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [
    {userId: 'user1', badgeId: 'W001', name: 'Aurora'},
    {userId: 'user2', badgeId: 'W002', name: 'Siska'},
    {userId: 'user3', badgeId: 'W003', name: 'Fajar'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
