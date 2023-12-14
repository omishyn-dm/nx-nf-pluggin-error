import {Component} from '@angular/core';
import {NewCombinedTabModule} from './new-combined/new-combined.module';

@Component({
	template: `<new-combined-container />`,
	imports: [NewCombinedTabModule],
	standalone: true,
})
export class StandaloneComponent {}
