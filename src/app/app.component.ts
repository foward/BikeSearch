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
  categories = ["mountainbike","citybike","racer",""];
  static colors = ["green","blue","yellow","black","red","silverwhite",""];
  genders = ["men","women","children",""];

  selected_color = "";
  selected_cat = "";
  selected_gen = "";

  cur_bike = "";

  selection = [];

  searching = false;

  myModalNormal;

   percentage = 0;
  
  bikes: BikeResultList[];
  errorMessage:string;
  
  constructor(private searchService: SearchService) { 
  }

  ngOnInit(){}

  selectAndShow(bike){
    var image = this.getPictureFromName(bike.filename);
    this.cur_bike = image;

    $("modal-content a img").attr("src", "./assets/images/"+this.cur_bike);
  }

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
    if (this.selected_color != "" || this.selected_gen != "" || this.selected_cat != ""){
      this.searching = true;

      this.getBikes();
    }
  }

  getPictureFromName (name){
    if (name != undefined){
      var picture = name.split('/').pop();
      return picture;
    }
    return name;
  }



  getBikes() {

    var conf = {"color":this.selected_color,"type":this.selected_gen,"category":this.selected_cat};

    this.searchService.getBikes(conf)
                     .subscribe(
              //         bikeResults => this.finish(bikeResults),
                       (bikeResults) => {
                       //  console.log(bikeResults);
                         this.finish(bikeResults);
                       },
                       error =>  this.errorMessage = <any>error);

   
  }

  getAverageMatch(matches){
    return AppComponent.getMatch(matches);
  }

  static getMatch(matches){
    var result = 0;

    for(var i=0;i < matches.length;i++){
  
      

      if (AppComponent.colors.indexOf(matches[i].classname) > -1){
        result += matches[i].score * 2;
      }else{
        result += matches[i].score;
      }

      
    }

   // console.log("result " + result/(matches.length+1));

    return result/(matches.length+1);
  }

 static gm(classes){
      //get matches for 'Farbe'
      var lst = classes[2].score;
    //  console.log(classes);

      var max = AppComponent.getMatch(classes);

      return max;
  }


  sorter(x,y){

      var max_x = AppComponent.gm(x.classes);
      var max_y = AppComponent.gm(y.classes);

      return max_y - max_x;
  }


  finish(res){
    this.bikes = res.sort(this.sorter);
 //  this.bikes =  this.bikes.filter(bike => bike.classes === this.selected_color)

   // this.bikes = res;
    //console.log(res);
    this.searching = false;
  }

}