import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { AppStore, Form } from './store/app.store';
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
			<app-first-name-input
				[value]="vm().form.name"
				[errors]="vm().formErrors.name"
				(valueChange)="updateFormField($event, 'name')"
			/>

			<!-- Last Name Input Component -->
			<app-last-name-input
				[value]="vm().form.lastName"
				[errors]="vm().formErrors.lastName"
				(valueChange)="updateFormField($event, 'lastName')"
			/>

			<!-- Sex Select Component -->
			<app-sex-select
				[value]="vm().form.sex"
				[errors]="vm().formErrors.sex"
				(valueChange)="updateFormField($event, 'sex')"
			/>

			<!-- Homeowner Radio Buttons Component -->
			<app-homeowner-radio
				[value]="vm().form.homeOwner"
				[errors]="vm().formErrors.homeOwner"
				(valueChange)="updateFormField($event, 'homeOwner')"
			/>

			<!-- Home Address Input Component -->
			<app-home-address-input
				*ngIf="vm().form.homeOwner === true"
				[value]="vm().form.homeAddress"
				[errors]="vm().formErrors.homeAddress"
				(valueChange)="updateFormField($event, 'homeAddress')"
			/>

			<!-- Submit Button -->
			<div class="mt-6">
				<button
					type="button"
					class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					(click)="submitForm()"
				>
					Submit
				</button>
			</div>

			<div class="mt-6">
				<button
					type="button"
					class="w-full bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
					(click)="saveAsDraft()"
				>
					Save as Draft
				</button>
			</div>
		</form>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	private readonly store = inject(AppStore);

	vm = this.store.vm;

	updateFormField(value: string | boolean, fieldName: keyof Form): void {
		this.store.updateFormField(value, fieldName);

		if (fieldName === 'homeOwner' && value === false) {
			this.store.removeError('homeAddress');
		}
	}

	submitForm() {
		this.store.submitForm();
	}

	saveAsDraft() {
		this.store.saveAsDraft();
	}
}
