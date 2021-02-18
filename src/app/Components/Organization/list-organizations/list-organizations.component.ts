import { Component, OnInit } from '@angular/core';
import { organization } from 'src/Shared/Models/organization';
import { OrganizationService } from 'src/Shared/Services/organization.service';
import { NavigationExtras, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

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
  org:organization

  public curicon = "http://www.google.com/intl/en_us/mapfiles/ms/micons/red-dot.png";
  constructor(private organizationService: OrganizationService, private messageService: MessageService,private confirmationService: ConfirmationService, private route:Router) { }

  ngOnInit(): void {
    this.organizationService.GetAllOrganizations().subscribe(result => {
      this.lstOrganizationMarkers = result;
    })
    this.org={id:0,address:"",lat:0,lng:0,location:"",mobile:"",organizationCode:"",organizationName:"",phone:"",responsiblePerson:"",isDeleted:false}
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
      mobile: position.mobile, organizationCode: position.organizationCode, organizationName: position.organizationName, phone: position.phone, responsiblePerson: position.responsiblePerson,isDeleted:position.isDeleted
    });

  }
  onMouseOver(infoWindow, position: organization) {
    const lat = position.lat;
    const lng = position.lng;
    const address = position.address;
    this.lstOrganizationMarkers.push({
      lat: lat, lng: lng, address: address, id: position.id, location: position.location,isDeleted:position.isDeleted
      ,mobile: position.mobile, organizationCode: position.organizationCode, organizationName: position.organizationName, phone: position.phone, responsiblePerson: position.responsiblePerson,
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
  confirm(id) {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to perform this action?',
        accept: () => {
          this.organizationService.GetOrganizationByID(id).subscribe(res=>{
            this.org=res
            this.organizationService.DeleteOrg(id,this.org).subscribe(
                data => {
                    this.ngOnInit(),
                        this.messageService.add({ severity: 'info', summary: 'Record Deleted!', detail: 'Record Deleted!' });
                }
            )
          })
        }
    });
}
showSuccess() {
  this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
}

showInfo() {
  this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content' });
}

showWarn() {
  this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content' });
}

showError() {
  this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
}

showTopLeft() {
  this.messageService.add({ key: 'tl', severity: 'info', summary: 'Info', detail: 'Message Content' });
}

showTopCenter() {
  this.messageService.add({ key: 'tc', severity: 'info', summary: 'Info', detail: 'Message Content' });
}

showBottomCenter() {
  this.messageService.add({ key: 'bc', severity: 'info', summary: 'Info', detail: 'Message Content' });
}

showConfirm() {
  this.messageService.clear();
  this.messageService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed' });
}

showMultiple() {
  this.messageService.addAll([
      { severity: 'info', summary: 'Message 1', detail: 'Message Content' },
      { severity: 'info', summary: 'Message 2', detail: 'Message Content' },
      { severity: 'info', summary: 'Message 3', detail: 'Message Content' }
  ]);
}

showSticky() {
  this.messageService.add({ severity: 'info', summary: 'Sticky', detail: 'Message Content', sticky: true });
}

onConfirm() {
  this.messageService.clear('c');
}

onReject() {
  this.messageService.clear('c');
}

clear() {
  this.messageService.clear();
}

}
