import {initFederation} from '@angular-architects/native-federation';
import {bootstrapApplication} from '@angular/platform-browser';
import {StandaloneComponent} from './app/standalone.component';
import {appContainerConfig} from './app/app-container.config';

initFederation()
  .catch((err) => console.error(err))
  .then(() => bootstrapApplication(StandaloneComponent, appContainerConfig))
  .catch((err) => console.error(err));
