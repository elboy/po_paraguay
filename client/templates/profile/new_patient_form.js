Template.newPatientForm.events({
	'submit form': function(event){
		event.preventDefault();
		var firstName = $('[name="first-name"]').val();
		var lastName = $('[name="last-name"]').val();
		var age = $('[name="age"]').val();
		var address = $('[name="address"]').val();
		// gender goes here
		var phoneNumber = $('[name="phone-number"]').val();
		// isOwner here


		var isOwner = $('#patient-form [name="owner"]:checked').val();
		var gender = $('#patient-form [name="gender"]:checked').val();

		//console.log(isOwner);
		//console.log(gender);

		var patientId = Patients.insert({
			user_id: Meteor.userId(),
			created_at: new Date(),
			first_name: firstName,
			last_name: lastName,
			age: age,
			address: address,
			gender: gender,
			phone_number: phoneNumber,
			is_owner: isOwner,
			color: null
		}); 

		$('[name="first-name"]').val('');
		$('[name="last-name"]').val('');
		$('[name="age"]').val('');
		$('[name="address"]').val('');
		$('[name="phone-number"]').val('');

		Session.set('selectedPatient', patientId);
	}
});