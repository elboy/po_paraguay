Orders.attachSchema(new SimpleSchema({
	first_name: {
		type: String,
		label: "First name",
		min: 1,
		max: 20
	},
	last_name: {
		type: String,
		label: "Last name",
		min: 1,
		max: 20

	},
	gender: {
		type: String,
		label: "Gender",
		allowedValues: ['Male', 'Female'],
		autoform: {
			options: [
				{label: 'Male', value: 'Male'},
				{label: 'Female', value: 'Female'}
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

	},
	left_hand: {
		type: Object,
		label: "Left hand"
	},
	'left_hand.has': {
		type: Boolean,
		label: "Build left hand?",
		autoform: {
			options: [
				{label: 'Yes', value: true},
				{label: 'No', value: false}
			]
		}
	},
	'left_hand.movement': {
		type: Boolean,
		label: "Has wrist movement?",
		optional: true,
		autoform: {
			options: [
				{label: 'Yes', value: true},
				{label: 'No', value: false}
			]
		}
	},
	right_hand: {
		type: Object,
		label: "Right hand"
	},
	'right_hand.has': {
		type: Boolean,
		label: "Build right hand?",
		autoform: {
			options: [
				{label: 'Yes', value: true},
				{label: 'No', value: false}
			]
		}
	},
	'right_hand.movement': {
		type: Boolean,
		label: "Has wrist movement?",
		optional: true,
		autoform: {
			options: [
				{label: 'Yes', value: true},
				{label: 'No', value: false}
			]
		}
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