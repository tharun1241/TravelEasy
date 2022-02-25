import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  //@ViewChild('profile') userform:NgForm;

  username:String="john Cena";
  mail="example@mail.com";
  phone:String= "123456789";
  Gender="male";
  password="1234567";
  



  ngOnInit(): void {
  }

  edit=false;

  editform()
  {
  //  console.log(this.edit);
    this.edit= (this.edit==true)? false: true;
   
   //console.log(this.username," ", this.email," ",this.gender," ",this.phone," ",this.password);
  }

   onSubmit(userform:NgForm){
    this.edit= (this.edit==true)? false: true;
   // console.log(userform);
   // console.log(this.username," ", this.mail," ",this.Gender," ",this.phone," ",this.password);
    
   }

}
