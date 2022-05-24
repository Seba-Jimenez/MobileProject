import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

declare var google:any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  map:any;

  @ViewChild('map', {read:ElementRef, static: false}) mapRef: ElementRef;

  infoWindows: any = [];
  markers: any = [
    {
      title: "National Art Gallery",
      latitude: "-17.824991",
      longitude: "31.049295"
    },
    {
      title: "Est Ed Hospital",
      latitude: "-17.820987",
      longitude: "31.039682"
    },
    {
      title: "Dominican Convent School",
      latitude: "-17.822647",
      longitude: "31.052042"
    },
    {
      title: "Chop Chop Brazilian Steakhouse",
      latitude: "-17.819460",
      longitude: "31.053844"
    },
    {
      title: "CAnadian Embassy",
      latitude: "-17.820972",
      longitude: "31.043587"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.showMap();
  }

  showMap(){
    const location = new google.maps.LatLng(-17.824858, 31.053028);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
  }

  addMarkersToMap(markers){
    for  (let m of markers) {
      let position = new google.maps.LatLng(m.latitude, m.longitude);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: m.title,
        latitude: m.latitude,
        longitude: m.longitude
      });
      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  addInfoWindowToMarker(m){
    let infoWindowContent = '<div id="content">' +
                                '<h2 id="firstHeading" class="firstHeading">' + m.title + '</h2>' +
                                '<p>Latitude: '+ m.latitude + '</p>' +
                                '<p> Longitude' + m.longitude + '</p>' +
                              '</div>';

    let infoWindow = new google.maps.infoWindow({
      content: infoWindowContent
    });

    m.addListener('click', ()=> {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, m);
    });
    this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows() {
    for(let window of this.infoWindows) {
      window.close();
    }
  }

}
