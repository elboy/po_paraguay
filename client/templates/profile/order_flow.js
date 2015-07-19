Template.orderFlow.helpers({
	'finishedOrder': function(){
		var submittedOrder = Session.get('currentOrder');
		var order = Orders.findOne(submittedOrder);
		return order;
	},
	'userName': function(){
		var submittedOrder = Session.get('currentOrder');
		var order = Orders.findOne(submittedOrder);
		var user = Meteor.users.findOne(order.user_id);
		return user;
	},
	'patientName': function(){
		var submittedOrder = Session.get('currentOrder');
		var order = Orders.findOne(submittedOrder);
		var patient = Patients.findOne(order.patient_id);
		return patient;
	}
});

Template.orderFlow.events({
	'submit form': function(event){
		event.preventDefault();
		var leftHand = $('#hands [name="left-hand"]:checked').val();
		var rightHand = $('#hands [name="right-hand"]:checked').val();

		var hasLH = !(leftHand === 'false');
		var hasRH = !(rightHand === 'false');

		var hasLWM = (leftHand === 'yes');
		var hasRWM = (rightHand === 'yes');

		var patientId = Session.get('selectedPatient');

		var orderId = Orders.insert({
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
		});
		
		Session.set('currentOrder', orderId);
		
	}


});