Meteor.publish('allUsersData', function(){
	return Meteor.users.find();
});