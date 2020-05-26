import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisitorpassComponentComponent } from './visitorpass-component/visitorpass-component.component';
import { IndexComponentComponent } from './index-component/index-component.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardFacultyComponent } from './dashboard-faculty/dashboard-faculty.component';
import { DashboardGatekeeperComponent } from './dashboard-gatekeeper/dashboard-gatekeeper.component';

@NgModule({
  declarations: [
    AppComponent,
    VisitorpassComponentComponent,
    IndexComponentComponent,
    DashboardAdminComponent,
    DashboardFacultyComponent,
    DashboardGatekeeperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
