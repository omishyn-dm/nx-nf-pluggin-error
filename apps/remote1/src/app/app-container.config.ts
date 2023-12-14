import {ApplicationConfig} from '@angular/core';
import {provideRouter, Routes} from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./app-container.routes'),
	},
];

export const appContainerConfig: ApplicationConfig = {
	providers: [provideRouter(routes)],
};
