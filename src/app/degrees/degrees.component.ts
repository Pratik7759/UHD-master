import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-degrees',
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.scss']
})
export class DegreesComponent {

  constructor(public AppComponent : AppComponent,public router:Router ){
    
  }

  onClick(event:any){
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    console.log(value);
    this.AppComponent.name= value;
    console.log(this.AppComponent.name)
    this.router.navigate(['/employees'])  }

    onClick1(event:any){
      var target = event.target || event.srcElement || event.currentTarget;
      var idAttr = target.attributes.id;
      var value = idAttr.nodeValue;
      console.log(value);
      this.AppComponent.name= value;
      console.log(this.AppComponent.name)
      // this.router.navigate(['/employees']) 
      this.router.navigateByUrl('/employees')
    }
}

