import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { AppStore } from './store/app.store';
import { provideComponentStore } from '@ngrx/component-store';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatGridListModule,
	],
	providers: [provideComponentStore(AppStore)],
	template: `
		<div class="flex flex-col">
			<mat-form-field
				class="m-5"
				appearance="fill"
			>
				<mat-label>Input</mat-label>
				<input matInput />
			</mat-form-field>

			<mat-form-field class="m-5">
				<mat-label>Select</mat-label>
				<mat-select>
					<mat-option value="one">First option</mat-option>
					<mat-option value="two">Second option</mat-option>
				</mat-select>
			</mat-form-field>
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	private readonly store = inject(AppStore);
}
