import {WelcomeComponent} from './welcome/welcome.component';
import {Routes} from '@angular/router';
import {MainComponent} from './main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'welcome',
        component: WelcomeComponent
      }
    ]
  }
]
