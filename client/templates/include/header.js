Template.header.events({
	'click .home': function(){
		Router.go('home');
	}
});

Template.userLoggedin.events({
	'click #logout': function(){
		Meteor.logout(function(err){
			if (err) {
				// show err message
			} else {
				// show alert that says logout
			}
		});
	},
	'click #login': function(){
		Meteor.logout(function(err){
			if (err) {
				// show err message
			} else {
				// show alert that says logout
			}
		});
	}
});

Template.userLoggedout.events({
	'click .signin': function(){
		Router.go('login');
	}
});