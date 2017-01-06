export const template: string = `
<div class="table-main">
  <div class="table-toggler">
    <div class="table-info">
      <p>City name: {{weathersArray[0].name}}</p>
      <p>Date: {{ date | date}}</p>
      <p>Temperature: {{weathersArray[0].main.temp | temperature: format}}</p>
    </div>
    <label for="table-id" class="table-label"  [class.active]="tableVisibility">
      <span>Show table view:</span>
      <input type="checkbox" value="" id="table-id"  (click)="tableToggle()">
    </label>
  </div>
  <table class="table-content" *ngIf='tableVisibility'>
    <tr>
      <td>Options:</td>
      <td></td>
      <td>
        <strong class='options' [class.active]="format == 'farengate'" (click)="checkFormat('farengate')">F</strong>
        <strong class='options' [class.active]="format == 'kelven'" (click)="checkFormat('kelven')">K</strong>
        <strong class='options' [class.active]="format == 'celsia'" (click)="checkFormat('celsia')">C</strong>
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>City name</td>
      <td>Icon</td>
      <td>Temperature</td>
      <td>Weather</td>
      <td>Clouds</td>
      <td>Pressure</td>
      <td>Humidity</td>
      <td>Wind</td>
    </tr>
    <tr *ngFor="let weather of weathersArray">
      <td>{{weather.name}}</td>
      <td><img src="http://openweathermap.org/img/w/{{weather.weather[0].icon}}.png" alt=""></td>
      <td *ngIf='weather.main.temp_min !== weather.main.temp_max'>{{weather.main.temp_min | temperature: format}} - {{weather.main.temp_max | temperature: format}}</td>
      <td *ngIf='weather.main.temp_min === weather.main.temp_max'>{{weather.main.temp | temperature: format}}</td>
      <td>{{weather.weather[0].description}}</td>
      <td>{{weather.clouds.all}}%</td>
      <td>{{weather.main.pressure}}</td>
      <td>{{weather.main.humidity}}</td>
      <td>{{weather.wind.speed}} m/s | {{weather.wind.deg}} Az</td>
    </tr>
  </table>
</div>
`
