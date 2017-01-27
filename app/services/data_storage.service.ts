import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import '../interfaces/weather.interface';
import '../interfaces/position.interface';

@Injectable()
export class DataStorageService {
    private location = new Subject<IResult>();
    private map = new Subject<google.maps.Map>();

    locationUpd = this.location.asObservable();
    mapUpd = this.map.asObservable();

    constructor() { }
    // getLocation(){
    //     if(this.location) { return this.location }
    // }

    setLocation(location: IResult) {
      // if(location) {
        // this.location = location;
        // console.log(location);
        this.location.next(<IResult>location);
      // }
    }

    // getMap(){
    //   if(this.map) { return this.map }
    // }

    setMap(map: google.maps.Map){
      // if(map) {
        this.map.next(<google.maps.Map>map);
      // }
    }
}
