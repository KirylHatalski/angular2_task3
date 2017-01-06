import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IndexComponent }  from '../components/index.component';
import { WeatherComponent } from '../components/weather.component';
import { GooglemapsComponent } from '../components/googlemaps.component';
import { TableComponent } from '../components/table.component';
import { TemperaturePipe } from '../pipes/temperature.pipe';



@NgModule({
    imports: [BrowserModule],
    declarations: [IndexComponent, WeatherComponent, GooglemapsComponent, TableComponent, TemperaturePipe],
    bootstrap: [IndexComponent]
})
export class IndexModule { }
