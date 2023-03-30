import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-degrees',
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.scss'],
})
export class DegreesComponent {
  @ViewChild('demo') anyName!: ElementRef;
  constructor(){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  ngAfterViewInit():void{
    this.anyName.nativeElement.innerHTML="Why Choose UHD"
  }

  onClick1(event:any){
    console.log(this.anyName.nativeElement.innerHTML="Business")
  }
  onClick2(event:any){
    this.anyName.nativeElement.innerHTML="Completion";
  }
  onClick3(event:any){
    console.log(this.anyName.nativeElement.innerHTML="Criminal Justice")
  }
  onClick4(event:any){
    console.log(this.anyName.nativeElement.innerHTML="Education")
  }
}
 
  // constructor(public AppComponent: AppComponent, public router: Router) {}

  // onClick(event:any){
  //   var target = event.target || event.srcElement || event.currentTarget;
  //   var idAttr = target.attributes.id;
  //   var value = idAttr.nodeValue;
  //   console.log(value);
  //   this.AppComponent.name= value;
  //   console.log(this.AppComponent.name)
  //   this.router.navigate(['/employees'])  }

  //   onClick1(event:any){
  //     var target = event.target || event.srcElement || event.currentTarget;
  //     var idAttr = target.attributes.id;
  //     var value = idAttr.nodeValue;
  //     console.log(value);
  //     this.AppComponent.name= value;
  //     console.log(this.AppComponent.name)
  //     // this.router.navigate(['/employees'])
  //     this.router.navigateByUrl('/employees')
  //   }

  // onClick(event:any) {
  //   let greeter: HTMLHeadingElement = document.getElementById(
  //     'demo'
  //   ) as HTMLHeadingElement;

  //   greeter.innerText = 'Hello world!';
  // }
