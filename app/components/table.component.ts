import '../interfaces/table.interface';
import { Component } from '@angular/core';
import { template } from '../templates/table.template';

@Component({
    selector: 'table-component',
    template: template
})

export class TableComponent {
    weather: IWeather;
    date: Date;
    format: string;
    tableVisibility: boolean;
    weathersArray: IDataListItem[];

    constructor() {
        this.initTable();
    }

    initTable(){
      if(localStorage.getItem('weather')){
        this.weather = JSON.parse(localStorage.getItem('weather'));
        this.weathersArray = this.weather.list;
        this.date = new Date(this.weather.createTime);
        this.tableVisibility = false;
        this.format = 'celsia';
      } else {
        setTimeout(this.initTable(), 2000)
      }
    }

    tableToggle(): void {
      this.tableVisibility = !this.tableVisibility;
    }

    checkFormat(newValue: string): void {
      this.format = newValue;
    }
}
