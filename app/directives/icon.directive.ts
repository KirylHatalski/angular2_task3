import '../interfaces/weather.interface';

import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[icon]' })
export class IconDirective implements OnInit {
  constructor( private el:ElementRef ) { }


  ngOnInit(){
    this.el.nativeElement.src = `http://openweathermap.org/img/w/${this.id}.png`;
    // this.el.nativeElement.style.filter = `hue-rotate(${this.temperature}deg)`;
  }
  @Input() id: string;
}
