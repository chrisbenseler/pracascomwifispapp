import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the PlazasperzoneComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'plazasperzone',
  templateUrl: 'plazasperzone.html'
})
export class PlazasperzoneComponent {

  @Input() plazas: Array<any> = [];

  @Output('clickHandler') selectPlazaClick = new EventEmitter();

  constructor() {
    
    
  }

  selectPlaza(plaza) {
  	this.selectPlazaClick.emit(plaza);
  }

}
