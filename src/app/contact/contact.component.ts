import { Component, OnInit } from '@angular/core';
import { Contactus } from '../contactus';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactModel=new Contactus();
  contact_msg:any="";
  constructor(private _userService: UserserviceService) { }

  onSubmit(){
    this._userService.saveContactUs(this.contactModel)
      .subscribe(
        data => {
          console.log("success ", data);
          this.contact_msg= "Detail submitted successfully";
        },
        err => {
          this.contact_msg = "fail to send";
        }
      )

  }

  

}
