/* Default options for all routes.
 * Options declared on specific route
 * will override these options.
 */

Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function(){
		return Meteor.subscribe('allUsersData');
	}
});

Router.route('/', function(){
	this.render('home');
}, {
	name: 'home'
});



/* Routes for static pages */
Router.route('/page1', function(){
	this.render('page1');
}, {
	name: 'extraPages'
});
Router.route('/login', function(){
	this.render('login');

}, {
	name: 'login',
	layoutTemplate: 'loginLayout'
});
Router.route('/profileHome', function(){
	console.log("hi");
	this.render('profileHome');
}, {
	name: 'profileHome'
});

/*
Router.route('/profile/:_id', function(){
	console.log(Meteor.user());
	this.render('profileHome',	{
		data: function(){
			return Users.findOne({_id: this.params._id});
		}
	});
});
*/



/*
 * If user goes to a link that requires login,
 * but is not logged in, redirect them to login page.
 */
Router.onBeforeAction(function(){
	if (!Meteor.user() && !Meteor.loggingIn()) {
        this.render('login');
    } else {
        // required by Iron to process the route handler
        this.next();
    }
}, {
	except: ['home', 'extraPages']
});

/*
 * When a user logs in, take them to
 * the profile homepage
 */
Router.onBeforeAction(function(){
	if(Meteor.user() || Meteor.loggingIn()){
		this.redirect('profileHome');
	} else {
		this.next();
	}
}, {
	only: 'login'
});