import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  DateSelected:any;
  title = 'FormValidation';  
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  
 isValidFormSubmitted = false;  
 user = new User();  
  constructor() { }

 onFormSubmit(form: NgForm) {  
   this.isValidFormSubmitted = false;  
   if (form.invalid) {  
      return;  
   }  
   this.isValidFormSubmitted = true;  
   form.resetForm();  
  }  
  ngOnInit(): void {
  }
  fetchDateSelected(){
    console.log("date selected by user is --- " + this.DateSelected)
  }
}
export class User {  
  mobileNumber ?: string;  
 }
