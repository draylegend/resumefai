import { Routes } from '@angular/router';
import { homeFeatureRoute } from '@resumefai/home/feature';

export const appRoutes: Routes = [
  homeFeatureRoute,
  { path: '**', redirectTo: homeFeatureRoute.path },
];
