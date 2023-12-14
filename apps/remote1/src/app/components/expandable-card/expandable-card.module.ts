import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MetricInfoPopoverControlModule} from '../metric-info-popover-control/metric-info-popover-control.module';
import {ExpandableCardContainer} from './expandable-card.container';

@NgModule({
	imports: [
		CommonModule,
		MatCardModule,
		MatIconModule,
		MatMenuModule,
		MetricInfoPopoverControlModule,
	],
	declarations: [ExpandableCardContainer],
	exports: [ExpandableCardContainer],
})
export class ExpandableCardModule {}
