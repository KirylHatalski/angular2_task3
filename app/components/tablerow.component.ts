import '../interfaces/weather.interface';

import {Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy, OnChanges} from '@angular/core';
import { template } from '../templates/tablerow.template';

@Component({
  selector: 'tablerow',
  // changeDetection: ChangeDetectionStrategy.Default,
  template:  template
})
export class TableRowComponent implements OnInit, OnChanges{
  weatherList: IDataListItem[];
  favoriteList: IDataListItem[];
  constructor(private cd: ChangeDetectorRef){
    this.favoriteList = [];
  }
  @Input() weatherArray: IDataListItem[];
  @Input() format: string;

  ngOnInit(){
  }


  setFavorite(cur: boolean, el: IDataListItem){

    return !cur;
  }

  ngOnChanges(){
    // this.weatherList = this.weatherList;
    this.weatherList = this.weatherArray;
    // this.favoriteList = this.weatherList.forEach((value: IDataListItem) =>{
    //   if(value.favor) { return value; }
    // })
    // console.log(this.favoriteList)
    // this.cd.detectChanges();
    // this.weatherList = this.weatherArray;
    // this.weatherList = this.weatherList;
  }
}
