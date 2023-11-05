import { Route } from '@angular/router';

export const homeFeatureRoute: Route = {
  path: '',
  pathMatch: 'full',
  loadComponent: () => import('./home-feature.component'),
};
