import { Routes } from '@angular/router';
import {AppRoutes} from "./constants/app-routes";

export const APP_ROUTES: Routes = [
  {
    path: AppRoutes.REGISTRATION,
    loadComponent: () =>
      import('./registration/registration.component').then(
        (c) => c.RegistrationComponent
      )
  },
  {
    path: AppRoutes.LOGIN,
    loadComponent: () =>
      import('./login/login.component').then(
        (c) => c.LoginComponent
      )
  },
  {
    path: AppRoutes.STUDENT,
    loadComponent: () =>
      import('./components/student/student.component').then(
        (c) => c.StudentComponent
      )
  },
  {
    path: '',
    redirectTo: AppRoutes.LOGIN,
    pathMatch: 'full',
  },
  { path: '**', redirectTo: AppRoutes.LOGIN , pathMatch: 'full' },
];
