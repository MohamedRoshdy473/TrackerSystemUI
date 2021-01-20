import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";
import { ClientService } from "../../../../Shared/Services/client.service";
import { ProjectService } from "../../../../Shared/Services/project.service";
import { RequestService } from "../../../../Shared/Services/request.service";
import { EmployeeService } from "../../../../Shared/Services/employee.service";
import { DepartmentService } from "../../../../Shared/Services/department.service";
import { OrganizationService } from "../../../../Shared/Services/organization.service";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexLegend
} from "ng-apexcharts";
import { department } from "src/Shared/Models/department";
import { organization } from "src/Shared/Models/organization";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: ApexFill;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: "app-piechart",
  templateUrl: "./piechart.component.html",
  styleUrls: ["./piechart.component.css"]
})
export class PiechartComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  clientLength: number
  projectLength: number
  requestLength: number
  empLength: number
  organizationLength: number
  deptLength
  // series:Number[]

  public chartOptions: Partial<ChartOptions>;

  constructor(private clientService: ClientService, private empService: EmployeeService,
    private projectService: ProjectService, private requestService: RequestService, private depService: DepartmentService,
    private orgService: OrganizationService
  ) {
  }
  ngOnInit(): void {
    // this.series = []
    this.clientService.GetAllClients().subscribe(e => {
      this.clientLength = e.length
      this.projectService.GetAllProjects().subscribe(e => {
        this.projectLength = e.length
        this.requestService.GetAllRequests().subscribe(e => {
          this.requestLength = e.length
          this.empService.GetAllEmployees().subscribe(e => {
            this.empLength = e.length
            this.orgService.GetAllOrganizations().subscribe(e => {
              this.organizationLength = e.length
              this.depService.GetAllDepartmens().subscribe(e => {
                this.deptLength = e.length
                this.chartOptions = {
                  series: [this.projectLength, this.requestLength, this.clientLength,this.empLength,this.organizationLength,this.deptLength],
                  chart: {
                    width: 900,
                    type: "pie"
                  },
                  labels: ["Projects", "Requests", "Clients", "Employees", "Organizations","Departments"],
                  responsive: [
                    {
                      breakpoint: 480,
                      options: {
                        chart: {
                          width: 500
                        },
                        legend: {
                          position: "bottom"
                        }
                      }
                    }
                  ]
                };
              })
            })
          })
        })
      })
      // this.series.push(this.clientLength)

    })
  }
}


