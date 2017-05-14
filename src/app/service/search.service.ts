import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Bike } from "app/model/bike";
import 'rxjs/Rx';
import { BikeResultList } from "app/model/bikeresultlist";

@Injectable()
export class SearchService {
    private bikesUrl = 'assets/mock-response.json';  // URL to web API
    private url = "https://getstartedjava-censureless-cryptography.mybluemix.net/api/bikes/";

    constructor(private http: Http) { }



    getBikes(config): Observable<BikeResultList[]> {

                   return this.http.get(this.bikesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    
    private extractData(res: Response) {
        let body = res.json();
        console.info("text ", body);
        return body.bikeResultList || {};
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
