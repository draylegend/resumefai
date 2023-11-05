import { TypeProvider } from '@angular/core';
import { HomeFacade } from './lib/home.facade';
import { HomeService } from './lib/home.service';

export * from './lib/create-prompt';
export * from './lib/home.facade';
export * from './lib/home.service';
export const homeProviders: TypeProvider[] = [HomeFacade, HomeService];
