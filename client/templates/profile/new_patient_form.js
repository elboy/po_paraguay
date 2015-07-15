Template.newPatientForm.events({
	'submit form': function(event){
		event.preventDefault();
		var firstName = $('[name="first-name"]').val();
		var lastName = $('[name="last-name"]').val();
		console.log(firstName + " " + lastName);
		Patients.insert({
			first_name: firstName,
			last_name: lastName
		});

		$('[name="first-name"]').val('');
		$('[name="last-name"]').val('');
	}
});