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
/*
 * When a user logs in, take them to
 * the profile homepage
 */
Router.route('/login', {
	name: 'login',
	layoutTemplate: 'loginLayout',
	action: function(){
		this.render('login');
	},
	onBeforeAction: function(){
		if(Meteor.user() || Meteor.loggingIn()){
			this.redirect('profile.home');
		} else {
			this.next();
		}
	}
});

/** Router for profile pages **/
/* profile home should access all orders from that user */
Router.route('/profile', {
	name: 'profile.home',
	waitOn: function(){
		var orders = Meteor.subscribe('userOrders');
		return orders;
	},
	action: function(){
		this.render('profileHome');
	}
});

/** Router for profile pages **/
/* admin page should access everything  */
Router.route('/adminDashboard', {
	name: 'admin',
	path: '/admin/dashboard',
	waitOn: function(){
		var orders = Meteor.subscribe('allOrders');
		var photos = Meteor.subscribe('allPhotos');
		var users = Meteor.subscribe('allUsers');
		return [orders, photos, users];
	},
	data: function(){
		return Orders.find({}, {sort: {created_at: -1}});
	},
	action: function(){
		this.render('adminDashboard');
	},
	onBeforeAction: function(){
		var user = Meteor.user();
		if(!Roles.userIsInRole(user, 'admin')){
			console.log("stopped");
			this.redirect('profile.home');
			this.stop();
		} else {
			console.log("went through");
			this.next();
		}
	}
});

Router.route('/createOrder');

/* Photo_flow */
Router.route('/create/:_id', {
	name: 'photo.upload',
	waitOn: function(){
		// Subscribe to current
		var order = Meteor.subscribe('currentOrder', this.params._id);
		var photos = Meteor.subscribe('userPhotos', this.params._id);
		return [order, photos];
	},
	data: function(){
		return Orders.findOne({_id: this.params._id});
	},
	action: function(){
		this.render('photoFlow');
	}
});

/* Personalize with colors */
Router.route('/update/:_id', {
	name: 'update',
	waitOn: function(){
		var order = Meteor.subscribe('currentOrder', this.params._id);
		return order;
	},
	data: function(){
		return Orders.findOne({_id: this.params._id});
	},
	action: function(){
		this.render('updateOrder');
	}
});

/* Personalize with colors */
Router.route('/personalize/:_id', {
	name: 'personalize.prosthetic',
	waitOn: function(){
		var order = Meteor.subscribe('currentOrder', this.params._id);
		return order;
	},
	data: function(){
		return Orders.findOne({_id: this.params._id});
	},
	action: function(){
		this.render('personalize');
	}
});

Router.route('checkout/:_id', {
	name: 'checkout',
	waitOn: function(){
		var order = Meteor.subscribe('currentOrder', this.params._id);
		return order;
	},
	data: function(){
		return Orders.findOne({_id: this.params._id});
	},
	action: function(){
		this.render('checkout');
	}
});

/*
 * If user goes to a link that requires login,
 * but is not logged in, redirect them to login page.
 */
Router.onBeforeAction(function(){
	if (!Meteor.user() && !Meteor.loggingIn()) {
        this.redirect('login');
        this.stop();
    } else {
        // required by Iron to process the route handler
        this.next();
    }
}, {
	except: ['home', 'extraPages', 'login']
});