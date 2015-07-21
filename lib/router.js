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

/* profile home should access all orders from that user */
Router.route('/profileHome', {
	subscriptions: function(){
		var orders = Meteor.subscribe('allOrders');
		return orders;
	},

	action: function(){
		if (this.ready()){
			this.render('profileHome');
		} else {
			this.render('loading');
		}
	},
	name: 'profileHome'
});

/* order page should have order information */
Router.route('/workflow/:_id', {
	subscriptions: function(){
		var patients = Meteor.subscribe('patients');
		var orders = Meteor.subscribe('orders', this.params._id);
		var images = Meteor.subscribe('photos');
		var subscriptionsArr = [patients, orders, images];
		return subscriptionsArr;
	},

	action: function(){
		if (this.ready()){
			console.log("1");
			if(Orders.findOne({})){
				this.render();
			} else {
				this.render('notFound');
			}
		} else {
			console.log("2");
			this.render('loading');
		}
	},
	name: 'workflow'
});

/*
Router.plugin('dataNotFound', {
  notFoundTemplate: 'notFound', 
  only: ['workflow']
  // or only: ['routeOne', 'routeTwo']
});*/

Router.onBeforeAction('dataNotFound', {only: 'workflow'});

/*
 * If user goes to a link that requires login,
 * but is not logged in, redirect them to login page.
 */
Router.onBeforeAction(function(){
	if (!Meteor.user() && !Meteor.loggingIn()) {
        this.redirect('login');
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