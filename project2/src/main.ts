import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AddressHubComponent } from './app/root/address-hub/address-hub.component';
import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

// bootstrapApplication(AddressHubComponent, appConfig)
//   .catch((err) => console.error(err));

// bootstrapApplication(AppModule)
//   .catch((err) => console.error(err));

platformBrowserDynamic().bootstrapModule(AppModule).catch((err) => console.error(err)); 

