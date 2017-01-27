export const template: string = `
<div class="table-main">
  <div class="table-toggler">
    <div class="table-info">
      <p>City name: {{weather.list[0].name}}</p>
      <p>Date: {{ date | date}}</p>
      <p>Temperature: {{weather.list[0].main.temp | temperature: format}}</p>
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
    </table>
    <tablerow class="table-content" *ngIf='tableVisibility' [weatherArray]='weather.list' [format]='format'></tablerow>
</div>
`
