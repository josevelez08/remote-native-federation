import { Route } from '@angular/router';
export const routes: Route[] = [
    {
      path: 'home',
      loadChildren: () => import('./app-routing.module').then((m) => m.AppRoutingModule)
    }
  ];