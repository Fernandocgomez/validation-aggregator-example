import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { AppStore } from './store/app.store';
import { provideComponentStore } from '@ngrx/component-store';

import {
	FirstNameInputComponent,
	HomeAddressInputComponent,
	HomeownerRadioComponent,
	LastNameInputComponent,
	SexSelectComponent,
} from './form-fileds';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		CommonModule,
		FirstNameInputComponent,
		LastNameInputComponent,
		SexSelectComponent,
		HomeownerRadioComponent,
		HomeAddressInputComponent,
	],
	providers: [provideComponentStore(AppStore)],
	template: `
		<form class="max-w-lg mx-auto p-6 bg-white rounded shadow-md mt-10">
			<!-- First Name Input Component -->
			<app-first-name-input></app-first-name-input>

			<!-- Last Name Input Component -->
			<app-last-name-input></app-last-name-input>

			<!-- Sex Select Component -->
			<app-sex-select></app-sex-select>

			<!-- Homeowner Radio Buttons Component -->
			<app-homeowner-radio></app-homeowner-radio>

			<!-- Home Address Input Component -->
			<app-home-address-input></app-home-address-input>

			<!-- Submit Button -->
			<div class="mt-6">
				<button
					type="submit"
					class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
				>
					Submit
				</button>
			</div>
		</form>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	private readonly store = inject(AppStore);
}
