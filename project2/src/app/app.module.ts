import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { AddressHubComponent } from './root/address-hub/address-hub.component';
import { BrowserModule } from '@angular/platform-browser';
import { LazyElementsModule } from '@angular-extensions/elements';



@NgModule({
  declarations: [AddressHubComponent],
  imports: [
    CommonModule,
    BrowserModule,
    LazyElementsModule
  ],
  exports: [AddressHubComponent],
  providers: [AddressHubComponent],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const myCustomElement = createCustomElement(AddressHubComponent, {injector: this.injector});
    customElements.define('micro-app-address', myCustomElement);
  }
 }
