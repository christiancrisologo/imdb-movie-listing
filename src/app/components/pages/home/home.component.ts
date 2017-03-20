import { Component, OnInit } from '@angular/core'; 
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _fm: FlashMessagesService ) { }

  ngOnInit() {
  }

  login() {
 
  }

}
