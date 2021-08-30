import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  historyData:any[]=[];
  id:any;
  constructor(private _userService:UserserviceService,private _routerparam:ActivatedRoute) { }

  ngOnInit(): void {
    let param1=this._routerparam.snapshot.paramMap.get('id');
   
    this.id= param1!=null?parseInt(param1):null;
    console.log(" user id"+this.id);

    this._userService.getHistory(this.id)
      .subscribe(
        data => {
          this.historyData=data;
          console.log("success ",this.historyData);
        
        }
      )
  }
  cancelTicket(booking_id:number){
    this._userService.cancelBooking(booking_id)
      .subscribe(
        data => {
          this.historyData=data;
          console.log("success ",this.historyData);
         // this._router.navigate(['login']);
        }
      )
  }

}
