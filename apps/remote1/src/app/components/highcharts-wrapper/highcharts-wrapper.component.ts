import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'highcharts-wrapper-component',
	templateUrl: './highcharts-wrapper.component.html',
	styleUrls: ['./highcharts-wrapper.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HighchartsWrapperComponent {}
