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
				[value]="name"
				(input)="onNameChange($event)"
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
	@Input() name!: string;
	@Input() errors!: string[];
	@Output() nameChange = new EventEmitter<string>();

	onNameChange(event: any) {
		this.nameChange.emit(event.target.value);
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
				[value]="lastName"
				(input)="onLastNameChange($event)"
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
	@Input() lastName!: string;
	@Input() errors!: string[];
	@Output() lastNameChange = new EventEmitter<string>();

	onLastNameChange(event: any) {
		this.lastNameChange.emit(event.target.value);
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
				[value]="sex"
				(change)="onSexChange($event)"
				class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
			>
				<option value="">Select</option>
				<option value="male">Male</option>
				<option value="female">Female</option>
				<option value="other">Other</option>
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
	@Input() sex!: string;
	@Input() errors!: string[];
	@Output() sexChange = new EventEmitter<string>();

	onSexChange(event: any) {
		this.sexChange.emit(event.target.value);
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
						[checked]="homeOwner === true"
						(change)="onHomeOwnerChange(true)"
						class="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
					/>
					<span class="ml-2">Yes</span>
				</label>
				<label class="inline-flex items-center">
					<input
						type="radio"
						[checked]="homeOwner === false"
						(change)="onHomeOwnerChange(false)"
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
	@Input() homeOwner!: boolean | null;
	@Input() errors!: string[];
	@Output() homeOwnerChange = new EventEmitter<boolean>();

	onHomeOwnerChange(value: boolean) {
		this.homeOwnerChange.emit(value);
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
				[value]="homeAddress"
				(input)="onHomeAddressChange($event)"
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
	@Input() homeAddress!: string;
	@Input() errors!: string[];
	@Output() homeAddressChange = new EventEmitter<string>();

	onHomeAddressChange(event: any) {
		this.homeAddressChange.emit(event.target.value);
	}
}
