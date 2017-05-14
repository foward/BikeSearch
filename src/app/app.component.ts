import { Component, OnInit } from '@angular/core';
import { SearchService } from "app/service/search.service";
import { Bike } from "app/model/bike";
import { BikeResultList } from "app/model/bikeresultlist";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchService]
})
export class AppComponent implements OnInit  {
  title = 'Wo ist meine Fahrrad?!';
  bikeResults: BikeResultList[];
errorMessage:string;

  constructor(private searchService: SearchService) { }

    ngOnInit(): void {
        this.getBikes();
    }


  getBikes() {

    this.searchService.getBikes()
                     .subscribe(
                       bikeResults => this.bikeResults = bikeResults,
                       error =>  this.errorMessage = <any>error);

   
  }



}
