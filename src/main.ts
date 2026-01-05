import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './app/components/login/login.component';

bootstrapApplication(LoginComponent, {
  providers: [
    provideHttpClient()
  ]
}).catch(err => console.error(err));
