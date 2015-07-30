Orders = new Mongo.Collection('orders');

Orders.allow({
	insert: function(userId, doc){
		return true;
	},
	update: function(userId, doc, fields, modifier){
		return true;
	},
	remove: function(userId, doc){
		return true;
	}
});


/*
Database: 
Users:
	• _id
	• name
	• is_admin
Patients:
	• _id
	• user_id
	• created_at
	• first_name
	• last_name
	• date_of_birth
	• address
	• gender
	• phone_number
	• is_owner (this will be a boolean to check if the user and patient are the same person)
	• prosthetic_color
	
Orders:
	• _id
	• user_id
	• patient_id
	• created_at
	• left_arm (these will be booleans, true if the user if building a prosthetic for this arm)
	• right_arm (boolean)
	• left_wrist_movement (boolean)
	• right_wrist_movement (boolean)
	• approved (boolean if the order was approved by an admin)
	• approval_admin_id 
	• cost
	• paid
Photos:
	• _id
	• user_id
	• patient_id
	• order_id
	• created_for
	• created_at
	• sz

*/