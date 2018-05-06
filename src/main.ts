import { enableProdMode, ɵrenderComponent as renderComponent } from '@angular/core';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

// Old bootstrap
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));

// New bootstrap
renderComponent(<any>AppComponent);
