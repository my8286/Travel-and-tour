import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedback } from '../feedback';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackModel:Feedback=new Feedback();
  id:number;
  constructor(private _userService:UserserviceService,private _router:Router,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let param1=this._activatedRoute.snapshot.paramMap.get('id');
    this.id= param1!=null?parseInt(param1):null;
  }

  onSubmit(){
    this.feedbackModel.userId=this.id;
   
    this._userService.saveFeedback(this.feedbackModel)
    .subscribe(
      data=> console.log(data),
      error=> console.log(error)
    )

  }

}
