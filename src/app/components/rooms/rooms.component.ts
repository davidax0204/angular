import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  roomsNames = ['pets', 'toys'];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickButton(newRoomName) {
    this.roomsNames.push(newRoomName);
    this.router.navigate(['/room/', newRoomName]);
  }
}
