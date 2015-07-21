Meteor.publish('patients', function(){
	var userId = this.userId;
	return Patients.find({user_id: userId});
});

//** CAUTION ** contains all user orders
Meteor.publish('orders', function(currentOrder){
	var userId = this.userId;
	return Orders.find({user_id: userId, _id: currentOrder});
});

Meteor.publish('allOrders', function(){
	var userId = this.userId;
	return Orders.find({user_id: userId});
});

//** CAUTION ** contains all user photos
Meteor.publish('photos', function(){
	var userId = this.userId;
	return Images.find({user_id: userId});
});