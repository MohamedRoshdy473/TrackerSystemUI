import { Component, OnInit } from '@angular/core';
import { organization } from 'src/Shared/Models/organization';
import { OrganizationService } from 'src/Shared/Services/organization.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list-organizations',
  templateUrl: './list-organizations.component.html',
  styleUrls: ['./list-organizations.component.css']
})
export class ListOrganizationsComponent implements OnInit {

  public lstOrganizationMarkers: organization[];
  displayMaximizable: boolean;
  loading: boolean = true;
  lat: number = 30.0638771000;
  lng: number = 31.3510361000;

  public curicon = "http://www.google.com/intl/en_us/mapfiles/ms/micons/red-dot.png";
  constructor(private organizationService: OrganizationService, private route:Router) { }

  ngOnInit(): void {
    this.organizationService.GetAllOrganizations().subscribe(result => {
      this.lstOrganizationMarkers = result;
    })
  }
  showMaximizableDialog()
  {
    this.organizationService.GetAllOrganizations().subscribe(
      res=>{this.lstOrganizationMarkers=res},
      err=>console.log(err)
    )
    this.displayMaximizable = true;
    this.loading = false;
  }

  placeMarker(position: organization) {
    const lat = position.lat;
    const lng = position.lng;
    const address = position.address;
    this.lstOrganizationMarkers.push({
      lat: lat, lng: lng, address: address, id: position.id, location: position.location,
      mobile: position.mobile, organizationCode: position.organizationCode, organizationName: position.organizationName, phone: position.phone, responsiblePerson: position.responsiblePerson
    });

  }
  onMouseOver(infoWindow, position: organization) {
    const lat = position.lat;
    const lng = position.lng;
    const address = position.address;
    this.lstOrganizationMarkers.push({
      lat: lat, lng: lng, address: address, id: position.id, location: position.location,
      mobile: position.mobile, organizationCode: position.organizationCode, organizationName: position.organizationName, phone: position.phone, responsiblePerson: position.responsiblePerson
    });
    infoWindow.open();
  }
  updateOrganization(id) {
    console.log(id)
    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //       a: id               
    //   },
  // };
    this.route.navigate(['home/editOrganization',id])
  }

}
