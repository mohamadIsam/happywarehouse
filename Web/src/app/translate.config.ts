import { HttpBackend, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(handler: HttpBackend) {
  const http = new HttpClient(handler);
  return new TranslateHttpLoader(http, './i18n/', '.json');
}

export const translationConfig = TranslateModule.forRoot({
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpBackend],
  },
  defaultLanguage: 'en-US',
});
