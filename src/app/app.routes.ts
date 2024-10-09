import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { LoanApplicationComponent } from './pages/loan-application/loan-application/loan-application.component';
import { LoanApplicationListComponent } from './pages/loan-application-list/loan-application-list.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },{
    path: 'newapplication',
    component: LoanApplicationComponent,
  },
  {
    path: 'newapplicationList',
    component: LoanApplicationListComponent,
  },
];