import '../interfaces/table.interface';
import { Component, ChangeDetectorRef, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { template } from '../templates/table.template';

@Component({
    selector: 'table-component',
    // changeDetection: ChangeDetectionStrategy.OnPush,
    template: template
})

export class TableComponent implements OnInit {
    weather: IWeather;
    date: Date;
    format: string;
    tableVisibility: boolean;
    // weathersArray: IDataListItem[];

    constructor(
      private cd: ChangeDetectorRef
    ) {
        // this.initTable();
    }

    ngOnInit(){
      if(localStorage.getItem('weather')){
        this.weather = JSON.parse(localStorage.getItem('weather'));
        this.weather.list.forEach(variable => {
            variable['favor'] = false;
        });
        // this.weathersArray = this.weather.list;
        this.date = new Date(this.weather.createTime);
        this.tableVisibility = false;
        this.format = 'celsia';
        // this.cd.detectChanges();
      } else {
        setTimeout(this.ngOnInit(), 2000)
      }
      // setInterval(()=>{this.cd.detectChanges()}, 5000)
    }

    // initTable(){
    // }

    tableToggle(): void {
      this.tableVisibility = !this.tableVisibility;
    }

    checkFormat(newValue: string): void {
      this.format = newValue;
    }
}
