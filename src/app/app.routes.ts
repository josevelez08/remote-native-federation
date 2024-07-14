import { Route } from '@angular/router';
export const routes: Route[] = [
    {
      path: 'home',
      loadChildren: () => import('./remote-main.module').then((m) => m.RemoteMainModule)
    }
  ];