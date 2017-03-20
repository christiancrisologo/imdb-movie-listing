
import { Injectable, EventEmitter } from '@angular/core';


import { RequestOptions, Headers, Http } from "@angular/http";
import { AppConstants } from "../const/app.constants";
import { ROUTE_NAMES } from "../const/route.names.const.js'";

@Injectable()
export class AppService {

  constructor(private _http: Http) { }
  // public pageLinks:any[]  = [];
  public pageLinks: any[] = [
    {
      id: 0,
      parent: [ROUTE_NAMES.ROOT, ROUTE_NAMES.HOME,ROUTE_NAMES.LISTINGS, ROUTE_NAMES.LOGIN],
      links: [
        {
          label: "Home",
          url: ROUTE_NAMES.HOME,
          icon: "glyphicon glyphicon-home",
          show: true,
          isRoute: true,
          id: 0
        },
        {
          label: "Listings",
          url: ROUTE_NAMES.LISTINGS,
          icon: "glyphicon glyphicon-film",
          show: true,
          isRoute: true,
          id: 0
        },
        ]
    }];

  public appTitle: string = AppConstants.APP_NAME;


  public getLinksByURL(url: string): any[] {
    var items: any[] = this.pageLinks.filter((item, index) =>
      item.parent.indexOf(url) > -1);
    return items.length ? items[0].links : [];

  }

  public routeChangeEmitter: EventEmitter<any> = new EventEmitter();
  public globalChangeEmitter: EventEmitter<any> = new EventEmitter();

  public getPageLinksById(id: number): any[] {
    return this.pageLinks.filter((item: any, index: number) => item.id === id)[0];
  }

  public getRequestOptions(): RequestOptions {
    return new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });
  }


}



export class ILink {
  label: string;
  url: string;
  id: number;
}

