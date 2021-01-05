import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';    
import { PrimeNGConfig } from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenubarModule} from 'primeng/menubar';
import {NavBarComponent} from './Components/Nav-bar/nav-bar.component'
import { RouterModule, Routes } from '@angular/router';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';;
import { MatIconModule } from '@angular/material/icon';


// import { HttpClientModule, HttpClient } from  '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {TabViewModule} from 'primeng/tabview';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {InputMaskModule} from 'primeng/inputmask';
import {ToastModule} from 'primeng/toast';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ProgressBarModule} from 'primeng/progressbar';
import {SignupComponent} from './Components/Signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

import {FileUploadModule} from 'primeng/fileupload';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {KeyFilterModule} from 'primeng/keyfilter';
import {ToolbarModule} from 'primeng/toolbar';
import {SplitButtonModule} from 'primeng/splitbutton';
import {RatingModule} from 'primeng/rating';
import {InputNumberModule} from 'primeng/inputnumber';

import {AutoCompleteModule} from 'primeng/autocomplete';
import {InputSwitchModule} from 'primeng/inputswitch';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import {PickListModule} from 'primeng/picklist';
import {OrderListModule} from 'primeng/orderlist';
import{TranslateModule,TranslateLoader} from '@ngx-translate/core'
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import{SideNavComponent} from './Components/Side-nav/side-nav.component'
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import {VirtualScrollerModule} from 'primeng/virtualscroller';

import {PanelMenuModule} from 'primeng/panelmenu';
import {TreeModule} from 'primeng/tree';

import {DynamicDialogModule} from 'primeng/dynamicdialog';

import {MatTooltipModule} from '@angular/material/tooltip';
// import { MaterialModule} from '@angular/material';


import { from } from 'rxjs';

import 'zone.js/dist/zone';
import "core-js/proposals/reflect-metadata";
import 'core-js/es/array';
import { HomeComponent } from './Components/Home/home.component';
import { AllProjectsComponent } from './Components/Projects/all-projects/all-projects.component';
import { CreateProjectComponent } from './Components/Projects/create-project/create-project.component';
import { UpdateProjectComponent } from './Components/Projects/update-project/update-project.component';
import { CategoryComponent } from './Components/Request/Categories/category/category.component';
import { ClientsComponent } from './Components/ClientComponents/clients/clients.component';
import { DepartmentComponent } from './Components/DepartmentComponents/Department/department.component';
import { CreateRequesteComponent } from './Components/Request/Manager-Create-requeste/create-requeste.component';
import { ChangePaswwordComponent } from './Components/Change-paswword/change-paswword.component';
import { AddEmployeeComponent } from './Components/employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './Components/employee/edit-employee/edit-employee.component';
import { DisplayAllEmployeesComponent } from './Components/employee/display-all-employees/display-all-employees.component';
import { AllUsersComponent } from './Components/All-users/all-users.component';
import { AllClientRequestsComponent } from "./Components/Request/All-client-requests/all-client-requests.component";
import { AgmCoreModule} from '@agm/core';
import { AddOrganizationComponent } from './Components/Organization/add-organization/add-organization.component';
import { ListOrganizationsComponent } from './Components/Organization/list-organizations/list-organizations.component';
import {AllManagerRequestsComponent} from '../app/Components/Request/All-manager-requests/all-manager-requests.component'
import { AssignRequestsComponent } from "./Components/Request/Assign-requests/assign-requests.component";
import { DisplayAllClientsComponent } from './Components/ClientComponents/display-all-clients/display-all-clients.component';
import { EditClientComponent } from './Components/ClientComponents/edit-client/edit-client.component';




registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavBarComponent,
    HomeComponent,
    SideNavComponent,
    AllProjectsComponent,
    CreateProjectComponent,
    UpdateProjectComponent,
    CategoryComponent,
    ClientsComponent,
    DisplayAllClientsComponent,
    EditClientComponent,
    CreateRequesteComponent,
    DepartmentComponent,
   ChangePaswwordComponent,
   AddEmployeeComponent,
   EditEmployeeComponent,
   DisplayAllEmployeesComponent,
   AllUsersComponent,
   AllClientRequestsComponent,
   AddOrganizationComponent,
   ListOrganizationsComponent,
   AllManagerRequestsComponent,
   AssignRequestsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    SliderModule,
    TabMenuModule,
    BrowserAnimationsModule,
    TreeModule,
    InputTextareaModule,
    MatTooltipModule,
    InputTextModule,
    CalendarModule,
    AccordionModule,
    ToastModule,
    TabViewModule,
    OrderListModule,
    MultiSelectModule,
    ContextMenuModule,
    RatingModule,
    InputMaskModule,
    MenubarModule,
    RouterModule,
    ProgressBarModule,
    OverlayPanelModule,
    DialogModule,
    AppRoutingModule,
    TableModule,
    PickListModule,
    ButtonModule,
    InputNumberModule,
    CheckboxModule,
    HttpClientModule,
    RadioButtonModule,
    MatIconModule,
    ToastrModule,
    ToolbarModule,
    ConfirmDialogModule,
    ReactiveFormsModule,
    FileUploadModule,
    KeyFilterModule,
    SplitButtonModule,
    AutoCompleteModule,
    InputSwitchModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatMenuModule,
    MatIconModule,
    VirtualScrollerModule,
    PanelMenuModule,
    CommonModule,
    DynamicDialogModule,
    ToastModule,
    TableModule,
    ButtonModule,

 
    // ConfirmationService,
    AgmCoreModule.forRoot({
      libraries: ["places", "geometry"],
      apiKey:'AIzaSyCxvNEG1CRZ0pzoriAujg07y101MbOkFrQ'}),
    RouterModule.forRoot([]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [MessageService,ConfirmationService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
