import { Routes } from '@angular/router';
import { homeFeatureRoute } from '@draylegend/home/feature';

export const appRoutes: Routes = [
  homeFeatureRoute,
  { path: '**', redirectTo: homeFeatureRoute.path },
];
