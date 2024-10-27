import { computed, Injectable, OnDestroy } from '@angular/core';
import { ComponentStore, OnStateInit } from '@ngrx/component-store';
import { Observable, tap } from 'rxjs';
import { saveToDraftSuite, statelessSuite } from '../validations/suite';

export type Sex = 'Male' | 'Female';

export interface Form {
	name?: string;
	lastName?: string;
	sex?: Sex;
	homeOwner?: boolean;
	homeAddress?: string;
}

export interface AppStoreState {
	form?: Form;
	formErrors?: { [key in keyof Form]?: string[] };
}

const initialState: AppStoreState = {};

@Injectable()
export class AppStore
	extends ComponentStore<AppStoreState>
	implements OnStateInit, OnDestroy
{
	readonly vm = computed(() => {
		return {
			form: {
				name: this.selectSignal((s) => s.form?.name)(),
				lastName: this.selectSignal((s) => s.form?.lastName)(),
				sex: this.selectSignal((s) => s.form?.sex)(),
				homeOwner: this.selectSignal((s) => s.form?.homeOwner)(),
				homeAddress: this.selectSignal((s) => s.form?.homeAddress)(),
			},
			formErrors: {
				name: this.selectSignal((s) => s.formErrors?.name)() || [],
				lastName: this.selectSignal((s) => s.formErrors?.lastName)() || [],
				sex: this.selectSignal((s) => s.formErrors?.sex)() || [],
				homeOwner: this.selectSignal((s) => s.formErrors?.homeOwner)() || [],
				homeAddress:
					this.selectSignal((s) => s.formErrors?.homeAddress)() || [],
			},
		};
	});

	constructor() {
		super(initialState);
	}

	ngrxOnStateInit(): void {
		console.log('ngrxOnStateInit');
	}

	override ngOnDestroy(): void {
		super.ngOnDestroy();
	}

	updateFormField(value: string | boolean, fieldName: keyof Form): void {
		this.patchState((s) => {
			const newForm = {
				...s.form,
				[fieldName]: value,
			};

			const suiteResults = statelessSuite(newForm, fieldName);
			const errors = suiteResults.getErrors();
			const filedErrors = errors[fieldName] ?? [];

			return {
				...s,
				form: {
					...newForm,
				},
				formErrors: {
					...s.formErrors,
					[fieldName]: filedErrors,
				},
			};
		});
	}

	submitForm() {
		const form = this.state().form ?? {};

		const suiteResults = statelessSuite(form);

		if (suiteResults.hasErrors()) {
			const errors = suiteResults.getErrors();

			this.patchState((s) => {
				return {
					...s,
					formErrors: {
						...errors,
					},
				};
			});
		} else {
			console.log(this.state());
		}
	}

	saveAsDraft() {
		const form = this.state().form ?? {};

		const suiteResults = saveToDraftSuite(form);

		if (suiteResults.hasErrors()) {
			const errors = suiteResults.getErrors();

			this.patchState((s) => {
				return {
					...s,
					formErrors: {
						...s.formErrors,
						...errors,
					},
				};
			});
		} else {
			console.log(this.state());
		}
	}

	removeError(fieldName: keyof Form) {
		this.patchState((s) => {
			return {
				...s,
				formErrors: {
					...s.formErrors,
					[fieldName]: [],
				},
			};
		});
	}

	private runIndividualValidations(fieldName: keyof Form) {
		const form = this.state().form ?? {};
		const suiteResults = statelessSuite(form, fieldName);
		const errors = suiteResults.getErrors();
		const filedErrors = errors[fieldName] ?? [];

		this.patchState((s) => {
			return {
				...s,
				formErrors: {
					...s.formErrors,
					[fieldName]: filedErrors,
				},
			};
		});
	}
}
