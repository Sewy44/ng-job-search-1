import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {setupWorker} from 'msw/browser';
import { mockHandlers } from './mocks';

setupWorker(...mockHandlers).start()
  .then(() => bootstrapApplication(AppComponent))
  .catch((err) => console.error(err));

