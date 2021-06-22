import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Message } from 'src/app/models/message.mode';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-chat-room-main',
  templateUrl: './chat-room-main.component.html',
  styleUrls: ['./chat-room-main.component.css']
})
export class ChatRoomMainComponent implements OnInit {

  @Input() messages:Message []
  @Input() myUser:User

  constructor() { }

  ngOnInit(): void {
  }

  onMessageSend(message)
  {
    this.messages.push({
      user:this.myUser,
      message:message
    })
  }
  onDeleteMessage(index)
  {
    this.messages.splice(index,1)
  }
}
