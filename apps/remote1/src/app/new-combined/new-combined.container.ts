import {ChangeDetectionStrategy, Component} from '@angular/core';
import {UntilDestroy} from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
	selector: 'new-combined-container',
	template: ``,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewCombinedContainer {}
