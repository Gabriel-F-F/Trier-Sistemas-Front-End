import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMinhaDirective]'
})
export class MinhaDirectiveDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = "blue";
   }
}
