import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartModule} from 'angular-highcharts';
import {LoaderModule} from '../loader/loader.module';
import {HighchartsWrapperComponent} from './highcharts-wrapper.component';
import {HighchartsWrapperContainer} from './highcharts-wrapper.container';

@NgModule({
	imports: [
		CommonModule,
		LoaderModule,
		ChartModule,
	],
	declarations: [HighchartsWrapperComponent, HighchartsWrapperContainer],
	exports: [HighchartsWrapperContainer],
})
export class HighchartsWrapperModule {}
