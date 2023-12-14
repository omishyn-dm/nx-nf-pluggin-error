import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from './spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

export * from './spinner.component';
export * from './spinner.entity';

@NgModule({
	imports: [CommonModule, MatProgressSpinnerModule],
	exports: [SpinnerComponent],
	declarations: [SpinnerComponent],
})
export class SpinnerModule {
	static forRoot(): ModuleWithProviders<SpinnerModule> {
		return {
			ngModule: SpinnerModule,
			providers: [],
		};
	}
}
