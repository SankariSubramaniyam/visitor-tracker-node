import { Component, OnInit } from '@angular/core';
import {Visit} from '../models/visit.model';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent{
  adminVisits : Visit[] = [
    {
      visit_id : 1,
      visitor_name : "Mr.lll",
      visitor_designation : "HR",
      visitor_organization : "Infosys",
      purpose : "Internship opportunities",
      visit_date : "2020-05-02",
      visitor_email : "hrll@infosys.com",
      visitor_mobileno : "9999999999",
      place_person_of_visit : "Tapal section"
    },
    {
      visit_id : 2,
      visitor_name : "Mr.kkk",
      visitor_designation : "HR",
      visitor_organization : "Accenture",
      purpose : "Internship opportunities",
      visit_date : "2020-06-02",
      visitor_email : "hrll@infosys.com",
      visitor_mobileno : "9999999999",
      place_person_of_visit : "Dean, CEG"
    }
  ];
  selectedVisit = this.adminVisits[0];

  showVisitorModal(index) : void{
    this.selectedVisit = this.adminVisits[index];
  }

  public toggleNavBar = false;
  toggle() {
    this.toggleNavBar = !this.toggleNavBar;
  }

}
