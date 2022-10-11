import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { OnesourceIconsModule } from 'projects/onesource-icons/src/lib/onesource-icons.module';
import {onesourceIconsIcnFlagSa , onesourceIconsIcnFolderCheck , onesourceIconsIcnFolderExclamation} from '../../../onesource-icons/src/lib/onesource-icons'
import {OnesourceIconsRegistry} from '../../../onesource-icons/src/lib/onesource-icons-registry'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OnesourceIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private onesourceIconsRegistry: OnesourceIconsRegistry) {
      this.onesourceIconsRegistry.registerIcons([
        onesourceIconsIcnFlagSa,
        onesourceIconsIcnFolderCheck,
        onesourceIconsIcnFolderExclamation
      ]);
  }
}

