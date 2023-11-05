import { Route } from '@angular/router';
import { homeProviders } from '@resumefai/home/domain';

export const homeFeatureRoute: Route = {
  path: '',
  pathMatch: 'full',
  loadComponent: () => import('./home-feature.component'),
  providers: [homeProviders],
};
