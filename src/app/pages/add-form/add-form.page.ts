import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.page.html',
  styleUrls: ['./add-form.page.scss'],
})
export class AddFormPage implements OnInit {
  myForm: FormGroup;
  category = ['petrol', 'bill','borrow','lend','medicine','doctor','salary', 'credit card bill', 'emi', 'monthly grocery', 'other', 'subscription', 'daily grocery', 'evening snacks', 'morning breakfast', 'food', 'outing', 'shopping']
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      mode: [false, Validators.required], // default value false for cash
      type: [false], // default value false for expense
      category: ['',Validators.required],
      description: ['']
    });
  }

  ngOnInit() {
  }
  


  submit() {
    if(this.myForm.invalid) this.myForm.markAllAsTouched()
    console.log(this.myForm.value);
  }
}
