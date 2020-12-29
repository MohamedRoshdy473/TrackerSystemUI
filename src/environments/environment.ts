// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  project: 'http://localhost:50653/api/project',
  stackeholders: 'http://localhost:50653/api/Stackeholders/',
  GetAllStackholdersByProjectID:'http://localhost:50653/api/Stackeholders/GetStackeholdersByProjectId/',
  postListOfStackholders:'http://localhost:50653/api/Stackeholders/',
  postListOfMilestoness:'http://localhost:50653/api/MileStones/',
  ProjectTeams:'http://localhost:50653/api/ProjectTeam/',
  organizations: 'http://localhost:50653/api/Organizations',
  clients: 'http://localhost:50653/api/Clients',
  employees: 'http://localhost:50653/api/Employees/',
  department: 'http://localhost:50653/api/Departments/',
  requestSubCategory: 'http://localhost:50653/api/RequestSubCategory/',
  requestCategory: 'http://localhost:50653/api/RequestCategory/',
  projectPositions: 'http://localhost:50653/api/ProjectPositions/',
  getDepartmentByEmpID:'http://localhost:50653/api/Departments/GetDepartmentByEmployeeId/',
  projectTypes:'http://localhost:50653/api/ProjectTypes',


  postProjectDocumentByProjectID:'http://localhost:50653/api/ProjectDocument/SaveDocument',
  uploadFile:'http://localhost:50653/api/ProjectDocument/uploadfile/',





  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
