import '../interfaces/position.interface';
import '../interfaces/weather.interface';

import { Component, Input, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import { PositionService } from '../services/position.service';
import { WeatherService } from '../services/weather.service';
import { DataStorageService } from '../services/data_storage.service';
import { PositionCheckService } from '../services/position_check.service';
import { template } from '../templates/position_check.template';


@Component({
    selector: 'position-check',
    providers: [PositionService, PositionCheckService, WeatherService, DataStorageService],
    template: template
})

export class PositiopCheckerComponent implements OnInit {
    private subscription: Subscription;

    constructor(
      public tpositionService: PositionService,
      public tPositionCheckService: PositionCheckService,
      private tDataStorageService: DataStorageService,
      public tWeatherService: WeatherService,
      // private cd: ChangeDetectorRef
    ) {}

    ngOnInit() {
      this.subscription = this.tDataStorageService.locationUpd.subscribe((location: IResult) => {
          console.log(location)
        });
    }

}
