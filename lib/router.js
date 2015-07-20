/* Default options for all routes.
 * Options declared on specific route
 * will override these options.
 */

Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
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
	this.render('profileHome');
}, {
	name: 'profileHome'
});

Router.route('/workflow', {
	subscriptions: function(){
		var patients = Meteor.subscribe('userPatients');
		var orders = Meteor.subscribe('patientOrders');
		var images = Meteor.subscribe('orderPhotos');
		var subscriptionsArr = [patients, orders, images];
		return subscriptionsArr;
	},

	action: function(){
		if (this.ready()){
			this.render('workflow');
		} else {
			this.render('loading');
		}
	},
	name: 'workflow'
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