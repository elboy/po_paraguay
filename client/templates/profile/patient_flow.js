Template.patientFlow.helpers({
	patients: function(){
		return Patients.find({});
	}
});

Template.patientFlow.events({
	'click .choose-patient': function(){
		var patientId = this._id
		Session.set('selectedPatient', patientId);
	},
	'click .remove-patient': function(){
		var patientId = Session.get('selectedPatient');
		Patients.remove(patientId);
	}
});