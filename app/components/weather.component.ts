import '../interfaces/weather.interface'
import '../interfaces/position.interface'

import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service'
import { PositionService } from '../services/position.service'

@Component({
    selector: 'weather',
    providers: [WeatherService, PositionService],
    template: ``
})

export class WeatherComponent {
    tweatherService: WeatherService;
    tpositionService: PositionService;


    constructor(WeatherService: WeatherService, PositionService: PositionService) {
        this.tweatherService = WeatherService;
        this.tpositionService = PositionService;

        this.tpositionService.getPosition().then((coords: ICoordinates) => { this.initWeather(coords.latitude, coords.longitude) });
    }

    initWeather(lat: number, lon: number) {
        let tempWeather: IWeather = JSON.parse(localStorage.getItem('weather'));
        if (tempWeather) {
            if (Date.now() - tempWeather.createTime > 10 * 60 * 1000) {
                this.tweatherService.getWeather(lat, lon).then((data: IWeather) => {
                    localStorage.setItem('weather', JSON.stringify(data));
                })
            }
        } else {
            this.tweatherService.getWeather(lat, lon).then((data: IWeather) => {
                localStorage.setItem('weather', JSON.stringify(data));
            })
        }
    }
}
