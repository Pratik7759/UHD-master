import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  myForm = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]+$'),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]+$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    contact: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{10}'),
    ]),
  });

  onSubmit() {
    console.warn(this.myForm.value);
  }
  get firstname() {
    return this.myForm.get('firstname');
  }
  get lastname() {
    return this.myForm.get('lastname');
  }
  get email() {
    return this.myForm.get('email');
  }
  get contact() {
    return this.myForm.get('contact');
  }

  Submit(){
    localStorage.setItem('form-data', JSON.stringify(this.myForm.value));
  }
 

}
