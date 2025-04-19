import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { UserHubComponent } from './app/root/user-hub/user-hub.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

  // bootstrapApplication(UserHubComponent, appConfig)
  // .catch((err) => console.error(err));

  platformBrowserDynamic().bootstrapModule(AppModule).catch((err) => console.error(err)); 
