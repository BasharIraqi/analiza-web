import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  IsReset:boolean=false;
  email:any;

  ngOnInit(){
    this.IsReset=false;
  }

  onSubmit(user:NgForm){

    this.IsReset=true;
    this.email=user.value.email;
  }
}
