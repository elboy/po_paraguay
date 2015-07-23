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
Router.route('/extraPages');
Router.route('/login', function(){
	this.render('login');

}, {
	name: 'login',
	layoutTemplate: 'loginLayout'
});

/* Router for profile pages */
Router.route('/profileHome');
Router.route('/createOrder');

/* Photo_flow */
Router.route('/create/:_id', {
	name: 'photo.upload',
	waitOn: function(){
		// Subscribe to current
		var order = Meteor.subscribe('order', this.params._id);
		var photos = Meteor.subscribe('photos');
		return [order, photos];
	},
	data: function(){
		return Orders.findOne({_id: this.params._id});
	},
	action: function(){
		this.render('photoFlow');
	}
});

Router.route('/personalize/:_id', {
	name: 'personalize.prosthetic',
	waitOn: function(){
		var order = Meteor.subscribe('order', this.params._id);
		return order;
	},
	action: function(){
		this.render('personalize');
	}
});

/* profile home should access all orders from that user */
/*
Router.route('/profileHome', {
	action: function(){
		this.render();
	},

	waitOn: function(){
		var orders = Meteor.subscribe('allOrders');
		return orders;
	},
	name: 'profileHome'
});
*/

/* order page should have order information */
/*
Router.route('/workflow/:_id', {
	action: function(){
		this.render();
	},
	data: function(){
		return Orders.findOne({_id: this.params._id});
	},
	waitOn: function(){
		var patients = Meteor.subscribe('patients');
		var orders = Meteor.subscribe('order', this.params._id);
		var images = Meteor.subscribe('photos');
		var subscriptionsArr = [patients, orders, images];
		return subscriptionsArr;		
	},
	name: 'workflow'
});
*/

//Router.onBeforeAction('dataNotFound', {only: 'workflow'});

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