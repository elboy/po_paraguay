Orders.attachSchema(new SimpleSchema({
	first_name: {
		type: String,
		label: "First name",
		min: 1,
		max: 20
	},
	last_name: {
		type: String,
		label: "First name",
		min: 1,
		max: 20

	},
	gender: {
		type: String,
		label: "Gender",
		allowedValues: ['Male', 'Female'],
		autoform: {
			options: [
				{label: "Male", value: "male"},
				{label: "Female", value: "female"}
			]
		}
	},
	date_of_birth: {
		type: Date,
		label: "Date of birth"

	},
	address: {
		type: String,
		label: "Address",
		min: 1,
		max: 50

	},
	phone_number: {
		type: String,
		label: "Phone number",
		min: 1,
		max: 20

	}
}));

/*

Orders.attachSchema(new SimpleSchema({
	user_id: {
		type: String,
		label: "Unique id of user who created order"
	},
	created_at: {
		type: Date,
		label: "Time & date that order was created"
	}
}));
*/