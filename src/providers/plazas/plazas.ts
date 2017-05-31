import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PlazasProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PlazasProvider {

  constructor(public http: Http) {
    console.log('Hello PlazasProvider Provider');
  }

  all() {
  	return this.http.get('../assets/plazas.json')
  	.map( data => data.json().plazas )
  	.map( plazas => plazas.filter( plaza => plaza.location) )

  }

}
