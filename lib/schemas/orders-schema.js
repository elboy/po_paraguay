Orders.attachSchema(new SimpleSchema({
	user_id: {
		type: String,
		label: "User id",
		autoValue: function(){
			return Meteor.userId();
		}
	},
	is_admin: {
		type: Boolean,
		label: "Is admin",
		defaultValue: false
	},
	created_at: {
		type: Date,
		label: "Created at",
		autoValue: function(){
			if (this.isInsert){
				return new Date;
			} else {
				this.unset();
			}
		}
	},
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
	},
	wrist_color: {
		type: String,
		label: "Color of wrist",
		optional: true,
		autoform: {
			options: [
				{label: 'Red', value: '#FF0000'},
				{label: 'Orange', value: '#FFA500'},
				{label: 'Yellow', value: '#FFFF00'},
				{label: 'Green', value: '#008000'},
				{label: 'Blue', value: '#0000FF'},
				{label: 'Indigo', value: '#4B0082'},
				{label: 'Violet', value: '#EE82EE'}
			]
		}
	},
	hand_color: {
		type: String,
		label: "Color of hand",
		optional: true,
		autoform: {
			options: [
				{label: 'Red', value: '#FF0000'},
				{label: 'Orange', value: '#FFA500'},
				{label: 'Yellow', value: '#FFFF00'},
				{label: 'Green', value: '#008000'},
				{label: 'Blue', value: '#0000FF'},
				{label: 'Indigo', value: '#4B0082'},
				{label: 'Violet', value: '#EE82EE'}
			]
		}
	},
	fingers_color: {
		type: String,
		label: "Color of fingers",
		optional: true,
		autoform: {
			options: [
				{label: 'Red', value: '#FF0000'},
				{label: 'Orange', value: '#FFA500'},
				{label: 'Yellow', value: '#FFFF00'},
				{label: 'Green', value: '#008000'},
				{label: 'Blue', value: '#0000FF'},
				{label: 'Indigo', value: '#4B0082'},
				{label: 'Violet', value: '#EE82EE'}
			]
		}
	},
	admin_approval: {
		type: Boolean,
		label: "Admin approved photos for creation",
		defaultValue: false
	},
	admin_approval_id: {
		type: String,
		label: "Id of admin who approved photos for creation",
		optional: true
	}
}));