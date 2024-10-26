import { Injectable, OnDestroy } from '@angular/core';
import { ComponentStore, OnStateInit } from '@ngrx/component-store';

export type Sex = 'Male' | 'Female';

export interface Form {
	name?: string;
	lastName?: string;
	sex?: { label: string; value: Sex };
	homeOwner?: boolean;
	homeAddress?: string;
}

export interface AppStoreState {
	form?: Form;
}

const initialState: AppStoreState = {};

@Injectable()
export class AppStore
	extends ComponentStore<AppStoreState>
	implements OnStateInit, OnDestroy
{
	constructor() {
		super(initialState);
	}

	ngrxOnStateInit(): void {
		console.log('ngrxOnStateInit');
	}

	override ngOnDestroy(): void {
		super.ngOnDestroy();
	}
}
