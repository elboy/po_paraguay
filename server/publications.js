Meteor.publish('order', function(currentOrder){
	var userId = this.userId;
	return Orders.find({user_id: userId, _id: currentOrder});
});

//** CAUTION ** contains all user orders
Meteor.publish('orders', function(){
	var userId = this.userId;
	return Orders.find({user_id: userId});
});

//** CAUTION ** contains all user photos
Meteor.publish('photos', function(orderId){
	var userId = this.userId;
	return Images.find({user_id: userId});
});