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
export class AppComponent {
  title = 'Wo ist mein Fahrrad?!';
  categories = ["neu","alt"];
  colors = ["rot","grün","blau"];
  genders = ["Männlich","Weiblich"];


  bikes = [{"name":"Bike","img":"none"},{"name":"Bike","img":"none"},{"name":"Bike","img":"none"}];

  selection = [];

  searching = false;

  constructor(private searchService: SearchService) { }

  ngOnInit(){
    this.getBikes();
  }

  remove(val){
    for(var i=0;i<this.selection.length;i++){
      var x = this.selection[i];
      if (x.value == val){
        this.selection = this.selection.splice(i,1);
        if (i == 0){
          this.selection = [];
        }
        break;
      }
    }
  }

  add(tp,clr){

    //this.selection.push({"type":tp,"value":clr});
  }

  ngAfterContentInit(){
     
  }

  search(){
    this.searching = true;

    //doSearch

    this.searching = false;
  }

  bikeResults: BikeResultList[];
errorMessage:string;

  getBikes() {

    this.searchService.getBikes()
                     .subscribe(
                       bikeResults => this.bikeResults = bikeResults,
                       error =>  this.errorMessage = <any>error);

   
  }


}
