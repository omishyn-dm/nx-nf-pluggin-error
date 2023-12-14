import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewCombinedContainer} from './new-combined.container';
import {ExpandableCardModule} from '../components/expandable-card/expandable-card.module';
import {HighchartsWrapperModule} from '../components/highcharts-wrapper/highcharts-wrapper.module';

@NgModule({
	imports: [
		CommonModule,
		ExpandableCardModule,
		HighchartsWrapperModule,
	],
	declarations: [
		NewCombinedContainer,
	],
	exports: [NewCombinedContainer],
})
export class NewCombinedTabModule {}
