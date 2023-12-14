import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {SpinnerType} from '../spinner';

@Component({
	selector: 'loader',
	templateUrl: './loader.component.html',
	styleUrls: ['./loader.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
	@Input() type = SpinnerType.Semipolar;
	@Input() size: 'sm' | 'md' | 'lg' = 'sm';
	@Input() color = '#13415e';
}
