import '../interfaces/weather.interface'
import '../interfaces/position.interface'

import { Component } from '@angular/core';
import { WeatherServise } from '../services/weather.service'
import { PositionServise } from '../services/position.service'

@Component({
    selector: 'weather',
    providers: [WeatherServise, PositionServise],
    template: ``
})

export class WeatherComponent {
    tweatherServise: WeatherServise;
    tpositionServise: PositionServise;


    constructor(WeatherServise: WeatherServise, PositionServise: PositionServise) {
        this.tweatherServise = WeatherServise;
        this.tpositionServise = PositionServise;

        this.tpositionServise.getPosition().then((coords: ICoordinates) => { this.initWeather(coords.latitude, coords.longitude) });
    }

    initWeather(lat: number, lon: number) {
        let tempWeather: IWeather = JSON.parse(localStorage.getItem('weather'));
        if (tempWeather) {
            if (Date.now() - tempWeather.createTime > 10 * 60 * 1000) {
                this.tweatherServise.getWeather(lat, lon).then((data: IWeather) => {
                    localStorage.setItem('weather', JSON.stringify(data));
                })
            }
        } else {
            this.tweatherServise.getWeather(lat, lon).then((data: IWeather) => {
                localStorage.setItem('weather', JSON.stringify(data));
            })
        }
    }
}
