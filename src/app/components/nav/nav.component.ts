import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {AppService} from "../../services/app.service";
import {STATUS_CODES} from "http";
import {ROUTE_NAMES} from "../../const/route.names.const.js'"; 
import {FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})


export class NavComponent implements OnInit {

  public currentRoute:string = ROUTE_NAMES.ROOT;
  public links:any[] = [];
  public saveDisabled:boolean = true;

  @Input() appTitle:string ;
  @Input() appSubTitle:string;

  constructor(
    private _fm:FlashMessagesService,
 
    private _router:Router, private _appService:AppService) {
    let self = this;
    this._router.events.subscribe((url:any)=> self.routeChange(url) );

  }

  public routeChange(url:any):void{
    this.currentRoute = this._router.url;
    this.links = this._appService.getLinksByURL(this.currentRoute);
  }

  public linkClick(link:string):void{
    
    this._appService.routeChangeEmitter.emit(link);
  }
 

  ngOnInit() {
    this._appService.globalChangeEmitter.subscribe( (args)=>{
      
    })

  }
 
}
