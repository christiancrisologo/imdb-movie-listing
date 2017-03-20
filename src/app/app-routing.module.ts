import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AppComponent } from './app.component';
import {ROUTE_NAMES} from "./const/route.names.const.js'";
import { ListingsComponent  } from './components/pages/listings/listings.component';

const routes: Routes = [
 
  {path:'',component:HomeComponent},
  {path:ROUTE_NAMES.HOME.substr(1),component:HomeComponent},
  {path:ROUTE_NAMES.LISTINGS.substr(1),component:ListingsComponent}
  
];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }

