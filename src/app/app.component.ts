import { Component, OnInit } from '@angular/core';
import { SearchService } from "app/service/search.service";
import { Bike } from "app/model/bike";
import { BikeResultList } from "app/model/bikeresultlist";

import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchService]
})
export class AppComponent {
  title = 'Wo ist mein Fahrrad ?';
  categories = ["mountainbike","citybike","racer"];
  static colors = ["green","blue","yellow","black","red","silverwhite"];
  genders = ["men","women","children"];

  selected_color = "";
  selected_cat = "";
  selected_gen = "";

  selection = [];

  searching = false;
  
  bikes: BikeResultList[];
  errorMessage:string;
  
  constructor(private searchService: SearchService) { 
  }

  ngOnInit(){}

  getColors(){
    return AppComponent.colors;
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

  getPictureFromName (name){
    var picture = name.split('/').pop();
    return picture;
  }

  getBikes() {
    var conf = {"color":this.selected_color,"type":this.selected_gen,"category":this.selected_cat};

    this.searchService.getBikes(conf)
                     .subscribe(
                       bikeResults => this.finish(bikeResults),
                       error =>  this.errorMessage = <any>error);

   
  }

  getAverageMatch(matches){
    return AppComponent.getMatch(matches);
  }

  static getMatch(matches){
    var result = 0;

    for(var i=0;i < matches.length;i++){
      if (AppComponent.colors.indexOf(matches[i].className) > -1){
        result += matches[i].match * 2;
      }else{
        result += matches[i].match;
      }
    }

    return result/(matches.length+1);
  }

 static gm(classifiers){
      //get matches for 'Farbe'
      var lst = classifiers[0].matches;
      console.log(classifiers);

      var max = AppComponent.getMatch(lst);

      return max;
  }


  sorter(x,y){

      var max_x = AppComponent.gm(x.classifiers);
      var max_y = AppComponent.gm(y.classifiers);

      return max_y - max_x;
  }


  finish(res){
    this.bikes = res.sort(this.sorter);
    //console.log(res);
    this.searching = false;
  }

}