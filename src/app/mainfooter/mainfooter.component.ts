import { Component, ElementRef, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-mainfooter',
  templateUrl: './mainfooter.component.html',
  styleUrls: ['./mainfooter.component.scss'],
})
export class MainfooterComponent {
  // @ViewChild('scroll')
  // scroll!: ElementRef;
  // scrollTop() {
  //   this.scroll.nativeElement.scrollTop = 0;
  // }
  scrollTop(){
    window.scrollTo({
      top:0,
      behavior:'smooth',
    })
  }
}
