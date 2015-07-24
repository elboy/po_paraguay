// publishes data of current order, from current user
Meteor.publish('order', function(currentOrder){
	var userId = this.userId;
	return Orders.find({user_id: userId, _id: currentOrder});
});

//** CAUTION ** contains all user orders
Meteor.publish('orders', function(){
	var userId = this.userId;
	return Orders.find({user_id: userId});
});

// publishes data of pictures corresponding to current order
Meteor.publish('photos', function(orderId){
	var userId = this.userId;
	return Images.find({user_id: userId, order_id: orderId});
});