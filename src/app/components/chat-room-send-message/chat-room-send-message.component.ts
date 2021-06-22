import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chat-room-send-message',
  templateUrl: './chat-room-send-message.component.html',
  styleUrls: ['./chat-room-send-message.component.css']
})
export class ChatRoomSendMessageComponent implements OnInit {

  @Output() message_to_send = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(message)
  {
    this.message_to_send.emit(message.value)
    message.value = ''
  }


}
