// core
import {Component, Input}        from 'angular2/core';
import {CORE_DIRECTIVES}  from 'angular2/common';

declare var $;
declare var google;
//------------------------------------
@Component({
  selector: 'google-maps',
  directives: [CORE_DIRECTIVES],
  styles: [`
    #_map_canvas  {
        width: 100%;
        height: 100%;
    }
  `],
  template: `
    <div id="_map_canvas"></div>
  `
})
export class googleMaps {
  @Input('options') options:any;


  ngOnInit(){
    var options = {}
        options = this.options

    // add script to body
    var js = document.createElement("script");
        js.type = "text/javascript";
        js.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAO2sYcau79tW0H3jG3z_qmb94SE8XNSKs";
        document.body.appendChild(js);
        js.onload = function(){
          if(options == undefined){
            // default shows entire map
            options = {center: {lat: 0, lng: 0}, zoom: 2}
          }
          var map = new google.maps.Map(document.getElementById('_map_canvas'), options);
        }
  }


}
//------------------------------------
