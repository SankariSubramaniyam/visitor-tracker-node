import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisitorpassComponentComponent } from './visitorpass-component/visitorpass-component.component';
import { IndexComponentComponent } from './index-component/index-component.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardFacultyComponent } from './dashboard-faculty/dashboard-faculty.component';
import { DashboardGatekeeperComponent } from './dashboard-gatekeeper/dashboard-gatekeeper.component';
import { VisiteeHierarchyComponent } from './visitee-hierarchy/visitee-hierarchy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { VisiteeSelectComponent } from './visitee-select/visitee-select.component';
import { MatSelectModule } from '@angular/material/select';
import { TreeModule } from 'angular-tree-component';
import { FormsModule }        from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VisitorpassComponentComponent,
    IndexComponentComponent,
    DashboardAdminComponent,
    DashboardFacultyComponent,
    DashboardGatekeeperComponent,
    VisiteeHierarchyComponent,
    VisiteeSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTreeModule,
    MatIconModule, 
    MatButtonModule,
    MatSelectModule,
    TreeModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
