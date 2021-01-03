import { Component, NgZone, OnInit } from '@angular/core';
import { organization } from 'src/Shared/Models/organization';
import { OrganizationService } from '../../../../Shared/Services/organization.service';
import {  MouseEvent } from '@agm/core';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.css']
})
export class AddOrganizationComponent implements OnInit {

  lat: number = 30.0634890000;
  lng: number = 31.2524870000;
   public curicon="http://www.google.com/intl/en_us/mapfiles/ms/micons/blue-dot.png";
   public organizationObj: organization;
   zoom: number;
   address: string;
 
 
  constructor(private organizationService:OrganizationService, private ngZone: NgZone) { }

  ngOnInit(): void {

    this.organizationObj = {lat:30.0634890000,lng:31.2524870000,address:'',id:0,organizationName:'',phone:'',location:'',mobile:'',organizationCode:'',responsiblePerson:''};
 
  }

  
onSubmit()
{
    console.log(this.organizationObj);
    this.organizationObj.lat =Number(this.organizationObj.lat);
    this.organizationObj.lng =Number(this.organizationObj.lng);
    this.organizationService.AddOrganization(this.organizationObj).subscribe((item)=>{
      
    });
}

mapClicked($event: MouseEvent) {
  let lat: number = $event.coords.lat;
  let lng: number = $event.coords.lng;
  console.log('lat: ', lat);
  console.log('lng: ', lng);
  this.organizationObj.lat = lat;
  this.organizationObj.lng = lng;
 this.getAddress(lat, lng);
 this.organizationObj.address =this.address;
  console.log(this.address)
}

getAddress(lat, lng) {
  const geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(lat, lng);
  const request: google.maps.GeocoderRequest = {
    location: latlng
  };
  geocoder.geocode(request, (results, status) => {
    this.ngZone.run(() => {
      this.address = results[0].formatted_address;
      return this.address
    });
  });
}  


}
