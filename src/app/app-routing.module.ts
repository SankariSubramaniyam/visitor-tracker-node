import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { VisitorpassComponentComponent } from './visitorpass-component/visitorpass-component.component';
import { IndexComponentComponent } from './index-component/index-component.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardFacultyComponent } from './dashboard-faculty/dashboard-faculty.component';
import { DashboardGatekeeperComponent } from './dashboard-gatekeeper/dashboard-gatekeeper.component';

const routes: Routes = [
  { path: 'index', component: IndexComponentComponent },
 { path: 'visitorPass', component: VisitorpassComponentComponent },
 { path: 'dashBoardAdmin', component: DashboardAdminComponent },
 { path: 'dashBoardFaculty', component: DashboardFacultyComponent },
 { path: 'dashBoardGateKeeper', component: DashboardGatekeeperComponent },
 {path:'**',component: IndexComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
