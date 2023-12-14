import {Component, Input} from '@angular/core';
import {AmcSpinnerConfig, SpinnerType} from './spinner.entity';

@Component({
	selector: 'spinner',
	templateUrl: './spinner.component.html',
	styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
	@Input() type: AmcSpinnerConfig['type'] | string; // TODO: fix types
	@Input() size: AmcSpinnerConfig['size'];
	@Input() color: any;
	@Input() translucent = false;

	SpinnerType = SpinnerType;
}
