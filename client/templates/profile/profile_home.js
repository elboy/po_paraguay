Template.profileHome.helpers({
	orders: function(){
		return Orders.find({}, {sort: {created_at: -1}});
	}
});

Template.profileHome.events({
	'click .new-order': function(){
		var orderId = Orders.insert({
			user_id: Meteor.userId(),
			created_at: new Date(),
			approved: false,
			approval_admin_id: null,
			cost: 125,
			paid: 0
		});

		Session.set('currentOrder', orderId);

		Router.go('workflow', {_id: orderId});



/*		var orderId = Orders.insert({
			user_id: Meteor.userId(),
			patient_id: patientId,
			created_at: new Date(),
			left_hand: hasLH,
			right_hand: hasRH,
			left_wrist_movement: hasLWM,
			right_wrist_movement: hasRWM,
			approved: false,
			approval_admin_id: null,
			cost: 125,
			paid: 0
		});*/
	},
	'click .go-to-order': function(){
		var orderId = this._id;
		Router.go('workflow', {_id: orderId});
	}
});