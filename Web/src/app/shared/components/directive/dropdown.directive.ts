import {
  ContentChildren,
  Directive,
  ElementRef,
  HostListener,
  QueryList,
} from '@angular/core';

@Directive({
  selector: '[app-dropdown]',
  standalone: true,
})
export class DropdownDirective {
  @ContentChildren('dropdownList', { descendants: true })
  elements!: QueryList<ElementRef>;
  private blockscreen!: Element;

  @HostListener('click', ['$event'])
  onClickHandler(event: MouseEvent) {
    event.stopPropagation();
    this.elements.forEach((element) => {
      const target = element.nativeElement;

      if (target.className.includes('show')) {
        target.classList.remove('show');
        this.hideBlockscreen();
      } else {
        target.classList.add('show');
        this.showBlockscreen(target);
      }
    });
  }

  showBlockscreen(mouseEvent: any) {
    const elementEvent = mouseEvent as Element;
    this.blockscreen = document.createElement('div');
    this.blockscreen.className = 'white-blockscreen';
    this.blockscreen.addEventListener('click', (event: any) =>
      this.hideBlockscreen()
    );
    elementEvent.appendChild(this.blockscreen);
  }

  hideBlockscreen() {
    const elementEvent = this.blockscreen.parentElement as Element;
    elementEvent.removeChild(this.blockscreen);
  }
}
