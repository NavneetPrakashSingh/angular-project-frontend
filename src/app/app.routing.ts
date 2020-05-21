import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {TempComponent} from './temp/temp.component';
import {AppLayoutComponent} from './_layout/app-layout/app-layout.component';
import {SiteLayoutComponent} from './_layout/site-layout/site-layout.component';
import {TimelineComponent} from './timeline/timeline.component';


const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'timeline', component: TimelineComponent},

      // otherwise redirect to home
      // {path: '**', redirectTo: ''}
    ]
  },
  // path without header
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {path: 'temp', component: TempComponent},
    ]
  }
];


export const appRoutingModule = RouterModule.forRoot(routes);
