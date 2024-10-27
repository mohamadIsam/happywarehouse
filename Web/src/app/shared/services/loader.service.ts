import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  loaderElement!: HTMLDivElement | undefined;

  constructor() { }

  showLoader() {
    if (!this.loaderElement) {
      this.loaderElement = document.createElement('div');
      this.loaderElement.classList.add('blockscreen');
      const loader = document.createElement('div');
      loader.classList.add('loader');
      this.loaderElement.appendChild(loader);
      document.getElementsByTagName('body')[0].appendChild(this.loaderElement);
    }
  }

  hideLoader() {
    if (this.loaderElement) {
      document
        .getElementsByTagName('body')[0]
        .removeChild(this.loaderElement as HTMLDivElement);
      this.loaderElement = undefined;
    }
  }
}
