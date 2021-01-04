import { Component, OnInit, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {  organization, OrganizationVM } from 'src/Shared/Models/organization';
import { OrganizationService } from 'src/Shared/Services/organization.service';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-edit-organization',
  templateUrl: './edit-organization.component.html',
  styleUrls: ['./edit-organization.component.css']
})
export class EditOrganizationComponent implements OnInit {
  public sub: Observable<string>;
  public a: string;
  OrgId: any
  orgObj: OrganizationVM
  lat: number = 30.0634890000;
  lng: number = 31.2524870000;
  public curicon = "http://www.google.com/intl/en_us/mapfiles/ms/micons/red-dot.png";
  zoom: number;
  address: string;

  constructor(private route: Router,
    private activatedRoute: ActivatedRoute,
    private organizationService: OrganizationService,
    private ngZone: NgZone) { }

  ngOnInit() {
  this.OrgId = this.activatedRoute.snapshot.params['id'];
    this.organizationService.GetOrganizationByID(this.OrgId).subscribe(E => {
      this.orgObj = E
      console.log(this.orgObj)
    })
  }
  // mapClicked($event: MouseEvent) {
  //   let lat: number = $event.coords.lat;
  //   let lng: number = $event.coords.lng;
  //   console.log('lat: ', lat);
  //   console.log('lng: ', lng);
  //   this.organizationObj.lat = lat;
  //   this.organizationObj.lng = lng;
  //   this.getAddress(lat, lng);
  //   this.organizationObj.address = this.address;
  //   console.log(this.address)
  // }
  // getAddress(lat, lng) {
  //   const geocoder = new google.maps.Geocoder();
  //   var latlng = new google.maps.LatLng(lat, lng);
  //   const request: google.maps.GeocoderRequest = {
  //     location: latlng
  //   };
  //   geocoder.geocode(request, (results, status) => {
  //     this.ngZone.run(() => {
  //       this.address = results[0].formatted_address;
  //       return this.address
  //     });
  //   });
  // }
  onSubmit() {
    console.log(this.orgObj)
    // this.organizationObj.lat = Number(this.organizationObj.lat);
    // this.organizationObj.lng = Number(this.organizationObj.lng);
  }
}
