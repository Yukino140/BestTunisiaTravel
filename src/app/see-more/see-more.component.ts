import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Destination } from '../models/destination';
import { DestinationsService } from '../services/destinations/destinations.service';

@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.component.html',
  styleUrls: ['./see-more.component.css']
})
export class SeeMoreComponent implements OnInit {
    Dest:Destination[]=[];
    destination: Destination = new Destination(0,"","",0,false,false,"",[],"")
  id: number = 0

    database: any
  constructor(private destinationService: DestinationsService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]

    this.fetchOffers();
     
     
     
  }
  
  fetchOffers(){
    this.database = this.destinationService.linkToDb()
    this.database.subscribe((offers: any) => {
      this.Dest = JSON.parse(JSON.stringify(offers)).offers
      for(let i=0; i<this.Dest.length; i++){
        if(this.id == this.Dest[i].id){
          this.destination = this.Dest[i]
          break
        }
      }
    })
  }
}
