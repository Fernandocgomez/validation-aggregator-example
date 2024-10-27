import { create, test, enforce, only, skipWhen } from 'vest';
import { Form } from './../store/app.store';

// Name validation
const validateName = (data: Form) => {
	test('name', 'Name is required', () => {
		enforce(data.name).isNotBlank();
	});

	test('name', 'Name must be at least 2 characters long', () => {
		enforce(data.name).longerThan(1);
	});
};

// Last name validation
const validateLastName = (data: Form) => {
	test('lastName', 'Last name is required', () => {
		enforce(data.lastName).isNotBlank();
	});

	test('lastName', 'Last name must be at least 2 characters long', () => {
		enforce(data.lastName).longerThan(1);
	});
};

// Sex validation
const validateSex = (data: Form) => {
	test('sex', 'Sex is required', () => {
		enforce(data.sex).isNotBlank();
	});

	test('sex', 'Sex must be either Male or Female', () => {
		enforce(data.sex).matches(/Male|Female/);
	});
};

// Homeowner validation
const validateHomeOwner = (data: Form) => {
	test('homeOwner', 'Homeowner status is required', () => {
		enforce(data.homeOwner).isBoolean();
	});

	skipWhen(data.homeOwner === false || data.homeOwner === undefined, () => {
		test('homeAddress', 'Home address is required', () => {
			enforce(data.homeAddress).isNotBlank();
		});
	});
};

export const statelessSuite = (data: Form, fieldName?: string) => {
	return create(() => {
		only(fieldName);

		validateName(data);
		validateLastName(data);
		validateSex(data);
		validateHomeOwner(data);
	})();
};

export const saveToDraftSuite = (data: Form) => {
	return create(() => {
		validateName(data);
		validateLastName(data);
	})();
};
