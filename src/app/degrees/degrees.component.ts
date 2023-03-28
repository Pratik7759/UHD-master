import { Component } from '@angular/core';

@Component({
  selector: 'app-degrees',
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.scss']
})
export class DegreesComponent {

  onClick(event:any){
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    console.log(value);
  }

//   receivedChildMessage: string;
// getMessage(message: string) {
//     this.receivedChildMessage = message;
}

