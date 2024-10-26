import { computed, Injectable, OnDestroy } from '@angular/core';
import { ComponentStore, OnStateInit } from '@ngrx/component-store';

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
}

const initialState: AppStoreState = {
	form: {
		name: 'Fernando',
		lastName: 'Cristobal',
		sex: 'Male',
		homeOwner: true,
		homeAddress: '9254 Sea Garden St, Houston, TX, 77034',
	},
};

@Injectable()
export class AppStore
	extends ComponentStore<AppStoreState>
	implements OnStateInit, OnDestroy
{
	constructor() {
		super(initialState);
	}

	readonly vm = computed(() => {
		return {
			name: this.selectSignal((s) => s.form?.name)(),
			lastName: this.selectSignal((s) => s.form?.lastName)(),
			sex: this.selectSignal((s) => s.form?.sex)(),
			homeOwner: this.selectSignal((s) => s.form?.homeOwner)(),
			homeAddress: this.selectSignal((s) => s.form?.homeAddress)(),
		};
	});

	ngrxOnStateInit(): void {
		console.log('ngrxOnStateInit');
	}

	override ngOnDestroy(): void {
		super.ngOnDestroy();
	}
}
