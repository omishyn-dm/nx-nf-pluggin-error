import {ChangeDetectionStrategy, Component} from '@angular/core';
import {UntilDestroy} from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
	selector: 'expandable-card',
	template: ``,
	styleUrls: ['./expandable-card.container.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpandableCardContainer {}
