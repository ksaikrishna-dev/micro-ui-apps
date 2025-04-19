import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHubComponent } from './root/user-hub/user-hub.component';
import { BrowserModule } from '@angular/platform-browser';
import {LazyElementsModule} from '@angular-extensions/elements';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [UserHubComponent],
  imports: [
    CommonModule,
    BrowserModule,
    LazyElementsModule
  ],
  providers: [],
  exports: [UserHubComponent],
  bootstrap: [UserHubComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
