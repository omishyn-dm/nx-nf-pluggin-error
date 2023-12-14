import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpinnerModule} from '../spinner';
import {LoaderComponent} from './loader.component';

@NgModule({
	declarations: [LoaderComponent],
	imports: [CommonModule, SpinnerModule],
	exports: [LoaderComponent]
})
export class LoaderModule {}
