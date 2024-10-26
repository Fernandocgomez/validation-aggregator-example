import { Injectable, OnDestroy } from '@angular/core';
import { ComponentStore, OnStateInit } from '@ngrx/component-store';

export interface AppStoreState {
	count: number;
}

const initialState: AppStoreState = {
	count: 0,
};

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
