import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { TimelineMax, Power0 } from "gsap";
@Directive({
  selector: '[onClick]'
})
export class OnClickDirective {

  @Input('toggle') private toggle: boolean = null;
  @Input('noToggle') private noToggle: boolean = null;

  isToggle: boolean = false;

  timeLine: TimelineMax;

  constructor(private el: ElementRef,
              private rend2: Renderer2) {
      this.timeLine = new TimelineMax();
  }

  @HostListener('click', ['$event'])
  onclick() {

    this.isToggle = !this.isToggle;

    if(this.toggle) {

      if(this.el.nativeElement.nextElementSibling.className === 'collapsed-menu') {
        if(this.el.nativeElement.children[2].innerText === 'keyboard_arrow_right') {
          // console.log(this.el.nativeElement.children[2].innerText);
          this.el.nativeElement.children[2].innerText = 'keyboard_arrow_down';
        }else {
          this.el.nativeElement.children[2].innerText = 'keyboard_arrow_right';
        };

        // this.rend2.setStyle(this.el.nativeElement.nextElementSibling, 'display', display);
        // console.log(this.el)
        // console.log(this)
        // console.log(this.el.nativeElement.parentElement)
        // console.log(this.el.nativeElement.parentNode.parentNode.childNodes)
        const childNode = this.el.nativeElement.parentNode.parentNode.childNodes;
        this.collapseLinks(childNode);
      }
    }

    if(this.noToggle) {
      console.log(this.el);
    }
  }

  collapseLinks = (childNode) => {
    let display = 'none';
    let opacity = 0;
    let time;
    let clicked;
    let others = [];

    if(!this.isToggle) {
      display = 'none';
      opacity = 0;
      time = 0.1
    } else {
      display = 'block';
      opacity = 1;
      time = 0.3;
    }

    childNode.forEach((el) => {
      // console.log(el);
      if(el.lastChild.className === 'collapsed-menu') {
        // console.log(el.lastChild);
        if(el.lastChild === this.el.nativeElement.nextElementSibling){
          clicked = el.lastChild;
        }else {
          others.push(el.lastChild);
        }

      }
    })

    // console.log(this.el.nativeElement.nextElementSibling);
    console.log(clicked);
    console.log(others);

      // others = el;

    this.timeLine
      .add('start')
      .to(others, 0.1, {autoAlpha: 0, display: 'none'})
      .to(clicked, time, {autoAlpha: opacity, display: display, ease: Power0.easeNone})
    ;
  }

}
