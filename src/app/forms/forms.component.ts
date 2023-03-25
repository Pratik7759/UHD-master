
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  
})
export class FormsComponent {

  constructor(private fb: FormBuilder) { }


  myForm = this.fb.group({
    name:['',Validators.required],
    email:['',Validators.required],
    contact:[null, [Validators.required, Validators.pattern("[0-9 ]{12}")]],
  })
  
 

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.myForm.value);
  }

 
}
