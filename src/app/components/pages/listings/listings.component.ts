import { Component, OnInit } from '@angular/core';
import { IMDBservice } from '../../../services/imdb.service';
@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {

  dataprovider:any[];
  public searchModel:any =  {
    searchTxt: ''
  };

  constructor(private _imdbService:IMDBservice) { }

  ngOnInit() {

  }

  submit(e){
    e.preventDefault();
    let params = {
      title:this.searchModel.searchTxt
    }

    console.log('submit ', params);
    this._imdbService.getMovies(params)
    .subscribe(resp=>{
      console.log('data recieved ',resp );
      this.dataprovider = Array.isArray(resp) ? resp : [resp];
    })

  }
}
