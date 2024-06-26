import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHeader]'
})

export class HeaderDirective {

  constructor(private el: ElementRef,private renderer: Renderer2) {
    // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'red');
    this.renderer.setStyle(this.el.nativeElement, 'transition','background-color 1.7s ease')
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'blue');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
  }

}
