// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  Domain:'http://localhost:50653/',
  project: 'http://localhost:50653/api/project',
  DeleteProject:'http://localhost:50653/api/project/SoftDelete/',
  stackeholders: 'http://localhost:50653/api/Stackeholders/',
  GetAllStackholdersByProjectID: 'http://localhost:50653/api/Stackeholders/GetStackeholdersByProjectId/',
  postListOfStackholders: 'http://localhost:50653/api/Stackeholders/',
  postListOfMilestoness: 'http://localhost:50653/api/MileStones/',
  ProjectTeams: 'http://localhost:50653/api/ProjectTeam/',
  GetProjectTeamsByProjectPositionId: 'http://localhost:50653/api/ProjectTeam/GetProjectTeamsByProjectPositionId/',
  organizations: 'http://localhost:50653/api/Organizations/',
  clients: 'http://localhost:50653/api/Clients/',
  employees: 'http://localhost:50653/api/Employees/',
  requests: 'http://localhost:50653/api/Request/',
  requestStatus: 'http://localhost:50653/api/RequestStatus/',
  requestTypes: 'http://localhost:50653/api/RequestTypes/',
  requestPeriorities: 'http://localhost:50653/api/RequestPeriorities/',
  department: 'http://localhost:50653/api/Departments/',
  requestSubCategory: 'http://localhost:50653/api/RequestSubCategory/',
  requestCategory: 'http://localhost:50653/api/RequestCategory/',
  projectPositions: 'http://localhost:50653/api/ProjectPositions/',
  getDepartmentByEmpID: 'http://localhost:50653/api/Departments/GetDepartmentByEmployeeId/',
  projectTypes: 'http://localhost:50653/api/ProjectTypes/',
  asset: 'http://localhost:50653/api/Assets',
  GetAllRequestByClientId: 'http://localhost:50653/api/Request/GetAllRequestByClientId/',
  reqMode: 'http://localhost:50653/api/RequestModes/',
  GetAllMilestonsByProjectId: 'http://localhost:50653/api/MileStones/GetMileStonesByProjectId/',
  GetAllTeamsByProjectId: 'http://localhost:50653/api/ProjectTeam/GetProjectTeamsByProjectId/',
  GetAllDocumentByProjectId: 'http://localhost:50653/api/ProjectDocument/GetProjectDocumentsByProjectId/',
  User: 'http://localhost:50653/api',
  postProjectDocumentByProjectID: 'http://localhost:50653/api/ProjectDocument/SaveDocument',
  uploadFile: 'http://localhost:50653/api/ProjectDocument/uploadfile/',
  deletestakeholder: 'http://localhost:50653/api/Stackeholders/',
  deletemilestone: ' http://localhost:50653/api/MileStones/',
  deleteteam: 'http://localhost:50653/api/ProjectTeam/',
  GetProjectsByClientId: 'http://localhost:50653/api/project/GetClientByProjectId/',
  deletedocument: 'http://localhost:50653/api/ProjectDocument/',
  updatestakeholdersbyprojectid: 'http://localhost:50653/api/Stackeholders/updatestakehodersByProjectId/1',
  updateteamsbyprojectid: 'http://localhost:50653/api/ProjectTeam/updateteamsByProjectId/1',
  updatemilestonebyprojectid: 'http://localhost:50653/api/MileStones/PutmilestonesDTOByProjectId/1',
  updatedocumectsbyprojectid: 'http://localhost:50653/api/ProjectDocument/PutDocumentsDTOByProjectId/',
  updateProject: 'http://localhost:50653/api/Project/',
  GetProjectById: 'http://localhost:50653/api/Project/',
  uploadImage: 'http://localhost:50653/api/UploadImage/uploadimage/',
  addRequstImages: 'http://localhost:50653/api/RequestImages',
  RequestDescription: 'http://localhost:50653/api/RequestDescription/',
  assignedRequests: 'http://localhost:50653/api/AssignedRequests/',
  getTeambyId:'http://localhost:50653/api/Teams/',
  addteams:'http://localhost:50653/api/Teams/',
  GetEmployeessByTeamId:'http://localhost:50653/api/ProjectTeam/GetEmployeessByTeamId/',
  GetRequestImageByRequestId:'http://localhost:50653/api/RequestImages/GetRequestImageByRequestId/',
  GetAllRequestByEmployeeId:'http://localhost:50653/api/AssignedRequests/GetAllRequestByEmployeeId/',
  GetAllProjectTeamsByProjectID:'http://localhost:50653/api/ProjectTeam/GetProjectTeamsByProjectId/',
  GetAllProjectTeamIdByProjectIDandTeamIdAndPoaitionId:'http://localhost:50653/api/ProjectTeam/GetProjectTeamByProjectIdAndTeamIdAndProjectPositionId/',
  GetProjectTeamByProjectPositionIdAndEmployeeId:'http://localhost:50653/api/ProjectTeam/GetProjectTeamByProjectPositionIdAndEmployeeId/',
  GetAllRequestByProjectTeamId:'http://localhost:50653/api/Request/GetAllRequestByProjectTeamId/',
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
