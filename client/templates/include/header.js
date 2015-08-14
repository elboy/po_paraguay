Template.header.onRendered(function(){
	// Highlight the top nav as scrolling occurs
	$('body').scrollspy({
    	target: '.navbar-fixed-top'
	});
});

Template.header.events({
	// Closes the Responsive Menu on Menu Item Click
	'click .navbar-collapse ul li a': function() {
    	$('.navbar-toggle:visible').click();
	}
});

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
	}
});

Template.userLoggedout.events({
	'click .signin': function(){
		Router.go('login');
	}
});