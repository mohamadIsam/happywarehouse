import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[showHidePassword]',
  standalone: true,
})
export class ShowHidePasswordDirective implements OnInit {
  showHideButton!: HTMLElement;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.addShowButton();
  }

  addShowButton() {
    this.showHideButton = document.createElement('i');
    this.showHideButton.className =
      'fa fa-eye-slash cursor-pointer text-primary';
    this.elementRef.nativeElement.parentElement.appendChild(
      this.showHideButton
    );
    this.renderer.listen(this.showHideButton, 'click', this.showHidePassword);
  }

  showHidePassword(event: any) {
    if (event.target.previousElementSibling.type == 'password') {
      event.target.classList.remove('fa-eye-slash');
      event.target.classList.add('fa-eye');
      event.target.previousElementSibling.type = 'text';
    } else {
      event.target.classList.remove('fa-eye');
      event.target.classList.add('fa-eye-slash');
      event.target.previousElementSibling.type = 'password';
    }
  }
}
