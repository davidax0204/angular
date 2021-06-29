import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/models/message.mode';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css'],
})
export class ChatRoomComponent implements OnInit {
  myUser: User = {
    userName: 'David',
    id: '0',
  };

  users: User[] = [
    {
      userName: 'Pauk',
      id: '1',
    },
    {
      userName: 'Pauka',
      id: '2',
    },
    {
      userName: 'Max',
      id: '2',
    },
  ];

  messages: Message[] = [
    {
      user: this.myUser,
      message: 'Hi',
    },
    {
      user: {
        userName: 'Pauka',
        id: '2',
      },
      message: 'Hi to you',
    },
  ];

  roomName;

  constructor(private router: ActivatedRoute) {
    this.router.paramMap.subscribe((params) => {
      this.roomName = params.get('name');
    });
  }

  ngOnInit(): void {}
}
