import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewCombinedContainer} from './new-combined.container';

const children: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: NewCombinedContainer,
	},
];

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forChild(children)],
	exports: [],
	providers: [],
})
export class DashboardNewCombinedTabRouterModule {}
