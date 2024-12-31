import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  formGroup!: FormGroup;
  
  formFields = [
    { label: 'Name:', type: 'text', name: 'name', placeholder:'Enter your name', required: true, validators: [Validators.required, Validators.minLength(4)]  },
    { label: 'Email:', type: 'email', name: 'email', placeholder:'Enter your email', required: true, validators: [
      Validators.required, 
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
    ]},
    { label: 'Mobile:', type: 'tel', name: 'mobile', placeholder:'Enter your mobile number', required: true, validators: [
      Validators.required, 
      Validators.pattern(/^\d{10}$/)
    ]},
    { label: 'DOB:', type: 'date', name: 'dob', placeholder:'Enter your DOB', required: true },
    { label: 'Password:', type: 'password', name: 'password', placeholder:'Enter your password', required: true, validators: [Validators.required, Validators.minLength(4)] },
    
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group({});
    this.formFields.forEach((field) => {
      const control = this.fb.control('', field.validators);
    this.formGroup.addControl(field.name, control);
  });
  }

  onSubmit() {
    alert("Form Submitted Successfully!");

    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      
      this.formGroup.reset();

    } else {
      console.error('Form is invalid!');
    }
  }
}