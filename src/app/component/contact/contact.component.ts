import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    Email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(10)]),
    gender: new FormControl(),
    ucountry: new FormControl()

  });
  constructor(private toaster: ToastrService) { }
  get firstname() {
    return this.form.get("firstname")
  }

  ngOnInit(): void {
  }
  submit() {
    this.toaster.success('we will get back', 'Toster fun!')
    console.log(this.form.value)


  }

}
