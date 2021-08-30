import { Component, OnInit } from '@angular/core';
import { Transport } from '../transport';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  transportModel=new Transport();
  transportData: Transport[]=[];
  searchDate:string="";
  constructor(private _userService: UserserviceService) { }

  onSearch(){

    this._userService.getTransport(this.transportModel)
      .subscribe(
        data => {
         
          this.transportData=data;
          console.log("success ",this.transportData);
         // this._router.navigate(['login']);
        },
        err => {
         // this.register_msg = err.error;
        }
      )
  }

}
