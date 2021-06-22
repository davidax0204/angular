import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Message } from 'src/app/models/message.mode';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message:Message
  @Input() myUserId:string
  @Output() delete = new EventEmitter()

  isMyMessage: boolean

  constructor() { }

  ngOnInit(): void {
    this.isMyMessage = this.myUserId === this.message.user.id
  }

  onclickDelete()
  {
    this.delete.emit()
  }
}
