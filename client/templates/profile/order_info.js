Template.orderInfo.helpers({

});

Template.orderInfo.events({
	'submit form': function(event){
		event.preventDefault();
		var leftHand = $('#hands [name="left-hand"]:checked').val();
		var rightHand = $('#hands [name="right-hand"]:checked').val();

		var hasLH = !(leftHand === 'false');
		var hasRH = !(rightHand === 'false');

		var hasLWM = (leftHand === 'yes');
		var hasRWM = (rightHand === 'yes');

	/*	console.log(leftHand);
		console.log(rightHand);
		console.log(hasLH);
		console.log(hasRH);
		console.log(hasLWM);
		console.log(hasRWM);*/

		var patientId = Session.get('selectedPatient');
		//console.log(patientId);


		Orders.insert({
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
	}


});