import { Component } from '@angular/core';
import { AppComponent } from '../app.component';



@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss']
})
export class ChooseComponent {

  constructor(public AppComponent : AppComponent ){
    console.log('ghvvhj',this.AppComponent.name);

  }
}
