import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss']
})
export class ChooseComponent {
  @Output() messageToEmit = new EventEmitter<string>();

  sendMessageToParent(message: string) {
      this.messageToEmit.emit(message)
  }
}
