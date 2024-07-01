import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg: string = '';

  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement;
    if (!elNative.src || elNative.src === this.customImg) {
      console.log('🔴 Esta imagen reventó -->', this.elHost);
    }
    elNative.src = this.customImg;
  }

  constructor(private elHost: ElementRef) {}
}
