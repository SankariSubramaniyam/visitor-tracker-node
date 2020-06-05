import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {Endpoint} from '../models/endpoint.model';

@Component({
  selector: 'app-visitorpass-component',
  templateUrl: './visitorpass-component.component.html',
  styleUrls: ['./visitorpass-component.component.css']
})
export class VisitorpassComponentComponent implements OnInit {

  constructor() { this.trial();}

  ngOnInit(): void {
  }

  public toggleNavBar = false;
  toggle() {
    this.toggleNavBar = !this.toggleNavBar;
  }
  bookVisit() {
    Swal.fire('Visit Booked!', 'Please check your email for further instructions', 'success')
  }

  endpoints : Endpoint[] =[
    {
      "workplace_division" : "AU Admin",
      "workplace" : "Office of Vice Chancellor",
      "endpoint_name" : "Vice-chancellor"
    },
    {
      workplace_division : "AU Admin",
      workplace : "Office of Vice Chancellor",
      endpoint_name : "PS to VC"
    }
  ];

    wpmap = new Map();
    //map.set("AU Admin",new Map().set("Office of Vice Chancellor",new Set.add("PS to VC").add("Vice-Chancellor"))));

    trial() {
      console.log(JSON.stringify(Array.from(this.endpoints)));
    for(let endpoint of this.endpoints ){
      let eset = new Set();
      eset.add(endpoint.endpoint_name);
      let wmap = new Map();
      wmap.set(endpoint.workplace,eset);
      this.wpmap.set(endpoint.workplace_division,wmap);
    }
    console.log("Output:");
    console.log(JSON.stringify(this.wpmap));
    console.log(JSON.stringify(Array.from(this.wpmap)));
    console.log(JSON.stringify(Array.from(JSON.stringify(this.wpmap.entries()))));
  }

}
