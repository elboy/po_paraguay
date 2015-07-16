Template.patientFlow.helpers({
	patients: function(){
		return Patients.find({});
	}
});

Template.patientFlow.events({
	// clicking on a patient sets the Session, 
	// to continue
	'click .choose-patient': function(){
		var patientId = this._id
		Session.set('selectedPatient', patientId);
	},
	'click .remove-patient': function(){
		var patientId = this._id;
		Patients.remove(patientId);
		Session.set('selectedPatient', null);
	}
});