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
  categories = ["mountainbike","citybike","racer"];
  colors = ["green","blue","yellow","black","red","silverwhite"];
  genders = ["men","women","children"];

  selected_color = "";
  selected_cat = "";
  selected_gen = "";

  selection = [];

  searching = false;
  
  bikes: BikeResultList[];
  errorMessage:string;

  constructor(private searchService: SearchService) { }

  ngOnInit(){
   
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

    this.getBikes();
  }

  getBikes() {
    var conf = {"color":this.selected_color,"type":this.selected_gen,"category":this.selected_cat};

    this.searchService.getBikes(conf)
                     .subscribe(
                       bikeResults => this.finish(bikeResults),
                       error =>  this.errorMessage = <any>error);

   
  }

  finish(res){
    this.bikes = res
    console.log(res);
    this.searching = false;
  }


}
