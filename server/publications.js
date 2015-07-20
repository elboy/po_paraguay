Meteor.publish('userPatients', function(){
	var userId = this.userId;
	return Patients.find({user_id: userId});
});

//** CAUTION ** contains all user orders
Meteor.publish('patientOrders', function(){
	var userId = this.userId;
	return Orders.find({user_id: userId});
});

//** CAUTION ** contains all user photos
Meteor.publish('orderPhotos', function(){
	var userId = this.userId;
	return Images.find({user_id: userId});
});