import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-first-name-input',
	standalone: true,
	imports: [CommonModule],
	template: `
		<div class="mb-4">
			<label
				for="name"
				class="block text-sm font-medium text-gray-700"
				>First Name:</label
			>
			<input
				type="text"
				id="name"
				[value]="value"
				(input)="onValueChange($event)"
				class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
			/>
			<div *ngIf="errors?.length">
				<p
					*ngFor="let err of errors"
					class="mt-1 text-sm text-red-600"
				>
					{{ err }}
				</p>
			</div>
		</div>
	`,
})
export class FirstNameInputComponent {
	@Input() value?: string; // Updated to allow undefined
	@Input() errors?: string[]; // Updated to allow undefined
	@Output() valueChange = new EventEmitter<string>();

	onValueChange(event: any) {
		this.valueChange.emit(event.target.value);
	}
}

@Component({
	selector: 'app-last-name-input',
	standalone: true,
	imports: [CommonModule],
	template: `
		<div class="mb-4">
			<label
				for="lastName"
				class="block text-sm font-medium text-gray-700"
				>Last Name:</label
			>
			<input
				type="text"
				id="lastName"
				[value]="value"
				(input)="onValueChange($event)"
				class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
			/>
			<div *ngIf="errors?.length">
				<p
					*ngFor="let err of errors"
					class="mt-1 text-sm text-red-600"
				>
					{{ err }}
				</p>
			</div>
		</div>
	`,
})
export class LastNameInputComponent {
	@Input() value?: string; // Updated to allow undefined
	@Input() errors?: string[]; // Updated to allow undefined
	@Output() valueChange = new EventEmitter<string>();

	onValueChange(event: any) {
		this.valueChange.emit(event.target.value);
	}
}

@Component({
	selector: 'app-sex-select',
	standalone: true,
	imports: [CommonModule],
	template: `
		<div class="mb-4">
			<label
				for="sex"
				class="block text-sm font-medium text-gray-700"
				>Sex:</label
			>
			<select
				id="sex"
				[value]="value"
				(change)="onValueChange($event)"
				class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
			>
				<option value="">Select</option>
				<option value="Male">Male</option>
				<option value="Female">Female</option>
			</select>
			<div *ngIf="errors?.length">
				<p
					*ngFor="let err of errors"
					class="mt-1 text-sm text-red-600"
				>
					{{ err }}
				</p>
			</div>
		</div>
	`,
})
export class SexSelectComponent {
	@Input() value?: string; // Updated to allow undefined
	@Input() errors?: string[]; // Updated to allow undefined
	@Output() valueChange = new EventEmitter<string>();

	onValueChange(event: any) {
		this.valueChange.emit(event.target.value);
	}
}

@Component({
	selector: 'app-homeowner-radio',
	standalone: true,
	imports: [CommonModule],
	template: `
		<div class="mb-4">
			<span class="block text-sm font-medium text-gray-700"
				>Are you a homeowner?</span
			>
			<div class="mt-1 space-x-4">
				<label class="inline-flex items-center">
					<input
						type="radio"
						[checked]="value === true"
						(change)="onValueChange(true)"
						class="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
					/>
					<span class="ml-2">Yes</span>
				</label>
				<label class="inline-flex items-center">
					<input
						type="radio"
						[checked]="value === false"
						(change)="onValueChange(false)"
						class="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
					/>
					<span class="ml-2">No</span>
				</label>
			</div>
			<div *ngIf="errors?.length">
				<p
					*ngFor="let err of errors"
					class="mt-1 text-sm text-red-600"
				>
					{{ err }}
				</p>
			</div>
		</div>
	`,
})
export class HomeownerRadioComponent {
	@Input() value?: boolean | null; // Updated to allow undefined
	@Input() errors?: string[]; // Updated to allow undefined
	@Output() valueChange = new EventEmitter<boolean>();

	onValueChange(value: boolean) {
		this.valueChange.emit(value);
	}
}

@Component({
	selector: 'app-home-address-input',
	standalone: true,
	imports: [CommonModule],
	template: `
		<div class="mb-4">
			<label
				for="homeAddress"
				class="block text-sm font-medium text-gray-700"
				>Home Address:</label
			>
			<input
				type="text"
				id="homeAddress"
				[value]="value"
				(input)="onValueChange($event)"
				class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
			/>
			<div *ngIf="errors?.length">
				<p
					*ngFor="let err of errors"
					class="mt-1 text-sm text-red-600"
				>
					{{ err }}
				</p>
			</div>
		</div>
	`,
})
export class HomeAddressInputComponent {
	@Input() value?: string; // Updated to allow undefined
	@Input() errors?: string[]; // Updated to allow undefined
	@Output() valueChange = new EventEmitter<string>();

	onValueChange(event: any) {
		this.valueChange.emit(event.target.value);
	}
}
