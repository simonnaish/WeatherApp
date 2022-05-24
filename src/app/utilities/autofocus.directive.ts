import {ChangeDetectorRef, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective {

  constructor(private el: ElementRef,
              private cdr: ChangeDetectorRef) {
  }

  public ngOnInit(): void {
    this.el.nativeElement.focus();
    this.cdr.detectChanges();
  }
}
