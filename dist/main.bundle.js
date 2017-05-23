webpackJsonp([2,5],{

/***/ 158:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 158;


/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(169);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_service_search_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = AppComponent_1 = (function () {
    function AppComponent(searchService) {
        this.searchService = searchService;
        this.title = 'Wo ist mein Fahrrad ?';
        this.categories = ["mountainbike", "citybike", "racer"];
        this.genders = ["men", "women", "children"];
        this.selected_color = "";
        this.selected_cat = "";
        this.selected_gen = "";
        this.cur_bike = "";
        this.selection = [];
        this.searching = false;
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.selectAndShow = function (bike) {
        var image = this.getPictureFromName(bike.bike.fileName);
        this.cur_bike = image;
        __WEBPACK_IMPORTED_MODULE_2_jquery__("modal-content a img").attr("src", "./assets/images/" + this.cur_bike);
    };
    AppComponent.prototype.getColors = function () {
        return AppComponent_1.colors;
    };
    AppComponent.prototype.remove = function (val) {
        for (var i = 0; i < this.selection.length; i++) {
            var x = this.selection[i];
            if (x.value == val) {
                this.selection = this.selection.splice(i, 1);
                if (i == 0) {
                    this.selection = [];
                }
                break;
            }
        }
    };
    AppComponent.prototype.add = function (tp, clr) {
        //this.selection.push({"type":tp,"value":clr});
    };
    AppComponent.prototype.ngAfterContentInit = function () {
    };
    AppComponent.prototype.search = function () {
        if (this.selected_color != "" && this.selected_gen != "" && this.selected_cat != "") {
            this.searching = true;
            this.getBikes();
        }
    };
    AppComponent.prototype.getPictureFromName = function (name) {
        if (name != undefined) {
            var picture = name.split('/').pop();
            return picture;
        }
        return name;
    };
    AppComponent.prototype.getBikes = function () {
        var _this = this;
        var conf = { "color": this.selected_color, "type": this.selected_gen, "category": this.selected_cat };
        this.searchService.getBikes(conf)
            .subscribe(function (bikeResults) { return _this.finish(bikeResults); }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent.prototype.getAverageMatch = function (matches) {
        return AppComponent_1.getMatch(matches);
    };
    AppComponent.getMatch = function (matches) {
        var result = 0;
        for (var i = 0; i < matches.length; i++) {
            if (AppComponent_1.colors.indexOf(matches[i].className) > -1) {
                result += matches[i].match * 2;
            }
            else {
                result += matches[i].match;
            }
        }
        return result / (matches.length + 1);
    };
    AppComponent.gm = function (classifiers) {
        //get matches for 'Farbe'
        var lst = classifiers[0].matches;
        console.log(classifiers);
        var max = AppComponent_1.getMatch(lst);
        return max;
    };
    AppComponent.prototype.sorter = function (x, y) {
        var max_x = AppComponent_1.gm(x.classifiers);
        var max_y = AppComponent_1.gm(y.classifiers);
        return max_y - max_x;
    };
    AppComponent.prototype.finish = function (res) {
        this.bikes = res.sort(this.sorter);
        //console.log(res);
        this.searching = false;
    };
    return AppComponent;
}());
AppComponent.colors = ["green", "blue", "yellow", "black", "red", "silverwhite"];
AppComponent = AppComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(231),
        styles: [__webpack_require__(224)],
        providers: [__WEBPACK_IMPORTED_MODULE_1_app_service_search_service__["a" /* SearchService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_service_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_service_search_service__["a" /* SearchService */]) === "function" && _a || Object])
], AppComponent);

var AppComponent_1, _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_semantic__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_semantic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_semantic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_service_search_service__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng_semantic__["NgSemanticModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7_app_service_search_service__["a" /* SearchService */], { provide: __WEBPACK_IMPORTED_MODULE_6__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_6__angular_common__["HashLocationStrategy"] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(45)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid\">\r\n\r\n    <div class=\"row\">\r\n        <div class=\"blue sixteen wide column\" style=\"margin-bottom: 10px;box-shadow: 2px 0px 4px 0px grey;\">\r\n            <br>\r\n\r\n            <div class=\"ui center aligned white header\">\r\n                <img class=\"ui massive image\" src=\"./assets/logo-watson.png\">\r\n                <h1 class=\"content\">\r\n                    {{title}}\r\n                </h1>\r\n            </div>\r\n\r\n            <br>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\" style=\"min-height: 500px;\">\r\n\r\n        <div class=\"ui stackable grid container\">\r\n            <div class=\"four wide column\">\r\n\r\n                <sm-dropdown title=\"Farbe\" class=\"fluid search selection\">\r\n                    <a sm-item *ngFor=\"let color of getColors()\" data-value=\"color\" (click)=\"selected_color = color;\">{{color}}</a>\r\n                </sm-dropdown>\r\n\r\n\r\n            </div>\r\n            <div class=\"four wide column\">\r\n\r\n\r\n                <sm-dropdown title=\"Kategorie\" class=\"fluid search selection\">\r\n                    <a sm-item *ngFor=\"let cat of categories\" data-value=\"cat\" (click)=\"selected_cat = cat;\">{{cat}}</a>\r\n                </sm-dropdown>\r\n\r\n            </div>\r\n            <div class=\"four wide column\">\r\n\r\n                <sm-dropdown title=\"Geschlecht\" class=\"fluid search selection\">\r\n                    <a sm-item *ngFor=\"let gen of genders\" data-value=\"gen\" (click)=\"selected_gen = gen;\">{{gen}}</a>\r\n                </sm-dropdown>\r\n\r\n            </div>\r\n            <div class=\"four wide column\">\r\n                <button href=\"#\" (click)=\"search()\" class=\"ui left floated fluid blue button\">\r\n              Suchen\r\n            </button>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"ui grid container\">\r\n            <div class=\"row\" *ngIf=\"bikes\" style=\"padding: 0px;margin-left: 15px;margin-top: -10px;\">\r\n                <p class=\"ui text-muted\" *ngIf=\"bikes.length > 0\">{{bikes.length}} Fahrräder gefunden</p>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"bikes\">\r\n\r\n                <div class=\"four wide computer eight wide tablet sixteen wide mobile column\" *ngFor=\"let bk of bikes\">\r\n\r\n                    <div class=\"ui card\">\r\n                        <img class=\"ui image clickable\" (click)=\"selectAndShow(bk);myModalNormal.show();\" src=\"./assets/images/{{getPictureFromName(bk.bike.fileName)}}\">\r\n                        <div class=\"content\">\r\n                            <div class=\"ui center aligned\">\r\n                                {{( getAverageMatch(bk.classifiers[0].matches) *100).toFixed(2)}}%\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <!--div class=\"row\" style=\"height: 300px;\">\r\n        <div class=\"ui doubling grid container\">\r\n            <div class=\"ui sixteen wide column\">\r\n                <h3 class=\"ui header\">Deine Auswahl</h3>\r\n                <p *ngIf=\"selection.length == 0\">Es wurden keine Paramter ausgewählt!</p>\r\n                <br>\r\n                <div *ngFor=\"let item of selection\" style=\"display: inline;margin-right: 5px;\">\r\n                    <div class=\"ui blue massive label\" (click)=\"remove(item.value);\">\r\n                        {{item.value}}\r\n                        <i class=\"delete icon\" (click)=\"remove(item.value);\"></i>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div-->\r\n\r\n    <div class=\"ui blue divider \"></div>\r\n\r\n    <div class=\"row\">\r\n\r\n        <div class=\"ui grid container\">\r\n            <div class=\"eight wide column\">\r\n                <a href=\"https://www.ibm.com/watson/developercloud/services-catalog.html\"> <img class=\"ui small image\" src=\"./assets/footer.png \"></a>\r\n                <p class=\"ui\">Francisco, Robin, Niels, Slobodanka, Alex & Matthias</p>\r\n            </div>\r\n\r\n            <div class=\"eight wide column\">\r\n                <a href=\"https://www.meetup.com/Blue-Hackers-Club/\"><img class=\"ui tiny right floated image\" src=\"./assets/--BHC logo.png \"></a>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n<sm-modal title=\"Ansicht für Fahrrad: {{cur_bike.replace('.jpg','')}}\" class=\"small center aligned modal\" #myModalNormal>\r\n    <modal-content class=\"ui center aligned\">\r\n        <a href=\"#\"><img *ngIf=\"cur_bike\" src=\"./assets/images/{{cur_bike}}\" class=\"ui massive image\"></a>\r\n\r\n    </modal-content>\r\n    <modal-content class=\"ui center aligned\">\r\n        <br><br>\r\n        <b>Kontakt zur Polizei</b>\r\n        <p>Telefon: 040 4286-56789<br> E-Mail: lka13arfahrrad@polizei.hamburg.de</p>\r\n        <a class=\"ui blue button\" target=\"_blank\" href=\"mailto:lka13arfahrrad@polizei.hamburg.de?subject=Mir%20gehört%20das%20Fahrrad:%20{{getPictureFromName(cur_bike).replace('.jpg','')}}\">Per E-Mail melden</a>\r\n    </modal-content>\r\n</sm-modal>\r\n\r\n<div class=\"ui full-screen \" *ngIf=\"searching \">\r\n    <div class=\"ui active inverted blurring dimmer center middle aligned \">\r\n        <div class=\"ui header \" style=\"margin-top: 300px; \">\r\n            <img class=\"ui massive image \" src=\"./assets/watson.gif \">\r\n            <h3 class=\"content \">Such nach ähnlichen Fahrrädern...</h3>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(159);


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
        this.bikesUrl = 'assets/mock-response.json'; // URL to web API
        this.url = "https://getstartedjava-overcivil-preparental.eu-gb.mybluemix.net/api/bikes/";
    }
    SearchService.prototype.getBikes = function (config) {
        //return this.http.get(this.bikesUrl).map(this.extractData).catch(this.handleError);
        return this.http.post(this.url, config).map(this.extractData).catch(this.handleError);
    };
    SearchService.prototype.extractData = function (res) {
        var body = res.json();
        console.info("text ", body);
        return body.bikeResultList || {};
    };
    SearchService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return SearchService;
}());
SearchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], SearchService);

var _a;
//# sourceMappingURL=search.service.js.map

/***/ })

},[509]);
//# sourceMappingURL=main.bundle.js.map