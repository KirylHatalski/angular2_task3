export const template: string = `
<tr>
  <td>City name</td>
  <td>Icon</td>
  <td>Temperature</td>
  <td>Weather</td>
  <td>Clouds</td>
  <td>Pressure</td>
  <td>Humidity</td>
  <td>Wind</td>
  <td>Add to favorite</td>
</tr>
<tr *ngFor="let favorite of (favoriteList)" >
  <td hotness [temperature]='favorite.main.temp'>{{favorite.name}}</td>
  <td><img icon [id]="favorite.weather[0].icon" alt=""></td>
  <td *ngIf='favorite.main.temp_min !== favorite.main.temp_max'>{{favorite.main.temp_min | temperature: format}} - {{favorite.main.temp_max | temperature: format}}</td>
  <td *ngIf='favorite.main.temp_min === favorite.main.temp_max'>{{favorite.main.temp | temperature: format}}</td>
  <td>{{favorite.weather[0].description}}</td>
  <td>{{favorite.clouds.all}}%</td>
  <td>{{favorite.main.pressure | number: "1.0-0"}}</td>
  <td>{{favorite.main.humidity}}</td>
  <td class='compass'>
      <div class="nord">N</div>
      <div class='power'><strong>{{favorite.wind.speed | number: "1.0-0"}}</strong>M/s</div>
      <div wind [direction]='favorite.wind.deg' class='direction'>
        &#10142;
      </div>
  </td>
  <td [class.unfav]="!favorite.favor" class='favorite'><i (click)='favorite.favor = setFavorite(favorite.favor)'>&#9733;</i></td>
</tr>
<tr *ngFor="let weather of (weatherList)" >
  <td hotness [temperature]='weather.main.temp'>{{weather.name}}</td>
  <td><img src="http://openweathermap.org/img/w/{{weather.weather[0].icon}}.png" alt=""></td>
  <td *ngIf='weather.main.temp_min !== weather.main.temp_max'>{{weather.main.temp_min | temperature: format}} - {{weather.main.temp_max | temperature: format}}</td>
  <td *ngIf='weather.main.temp_min === weather.main.temp_max'>{{weather.main.temp | temperature: format}}</td>
  <td>{{weather.weather[0].description}}</td>
  <td>{{weather.clouds.all}}%</td>
  <td>{{weather.main.pressure | number: "1.0-0"}}</td>
  <td>{{weather.main.humidity}}</td>
  <td class='compass'>
      <div class="nord">N</div>
      <div class='power'><strong>{{weather.wind.speed | number: "1.0-0"}}</strong>M/s</div>
      <div wind [direction]='weather.wind.deg' class='direction'>
        &#10142;
      </div>
  </td>
  <td [class.unfav]="!weather.favor" class='favorite'><i (click)='weather.favor = setFavorite(weather.favor, weather)'>&#9733;</i></td>
</tr>
`
