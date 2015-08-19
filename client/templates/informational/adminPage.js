Template.orderInfoAdmin.helpers({
	'photos': function(){
		var images = Images.find({order_id: this._id});
		return images;
	}
});

Template.orderInfoAdmin.events({
	'click .approve-admin': function(){
		Orders.update(this._id, {$set: {admin_approval: true, admin_approval_id: Meteor.userId()}}, function(error, result){
			if (error){
				console.log("error: ", error);
			} else {
				throwInfo(result);
			}
		});
	},
	'click .unapprove-admin': function(){
		console.log(Meteor.userId());
		Orders.update(this._id, {$set: {admin_approval: false}}, function(error, result){
			if (error){
				console.log("error: ", error);
			} else {
				throwInfo(result);
			}
		});
	}
});