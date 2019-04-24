import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[onClick]'
})
export class OnClickDirective {

  @Input('toggle') private toggle: boolean = null;
  @Input('noToggle') private noToggle: boolean = null;

  isToggle: boolean = false;



  constructor(private el: ElementRef,
              private rend2: Renderer2) { }

  @HostListener('click', ['$event'])
  onclick() {
    let display = 'none';

    if(this.isToggle) {
      display = 'none'
    } else {
      display = 'block'
    }

    this.isToggle = !this.isToggle;

    if(this.toggle) {

      if(this.el.nativeElement.nextElementSibling.className === 'collapsed-menu') {
        if(this.el.nativeElement.children[2].innerText === 'keyboard_arrow_right') {
          // console.log(this.el.nativeElement.children[2].innerText);
          this.el.nativeElement.children[2].innerText = 'keyboard_arrow_down';
        }else {
          this.el.nativeElement.children[2].innerText = 'keyboard_arrow_right';
        }

        this.rend2.setStyle(this.el.nativeElement.nextElementSibling, 'display', display);
      }
    }

    if(this.noToggle) {
      console.log(this.el);
    }
  }

}
