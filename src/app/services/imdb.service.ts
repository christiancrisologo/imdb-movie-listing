
import { Injectable, EventEmitter } from '@angular/core';
import { RequestOptions, Headers, URLSearchParams, Http } from "@angular/http";
import { AppConstants } from "../const/app.constants";
import { Observable } from "rxjs";

/*
  IMDB parameters 
  i -	Optional*		<empty>	A valid IMDb ID (e.g. tt1285016)
  t	 - Optional*		<empty>	Movie title to search for.
  type -	No	movie, series, episode	<empty>	Type of result to return.
  y	 - No		<empty>	Year of release.
  plot -	No	short, full	short	Return short or full plot.
  r	- No	json, xml	json	The data type to return.
  tomatoes -	No	true, false	false	Include Rotten Tomatoes ratings.
  callback -	No		<empty>	JSONP callback name.
  v	 - No 1	API version (reserved for future use).
*/


@Injectable()
export class IMDBservice {

  constructor(private _http: Http) { }

  IMDB_API_URL: string = "http://www.omdbapi.com/";

  getMovies(param: any): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('i', param.id);
    params.set('t', param.title);
    let options = this.getRequestOptions(params);

    return this._http.get(this.IMDB_API_URL, options)
      .map((resp)=> {

        return resp.json();

      }).catch(this.handleError);;

  }
  private handleError(error) {
    let errorMessage = error && error.statusText ||  'Server error';
    return Observable.throw( errorMessage );
  }
  public getRequestOptions(params): RequestOptions {
    let options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });
    options.search = params;
    return options;
  }




}



export class ILink {
  label: string;
  url: string;
  id: number;
}

