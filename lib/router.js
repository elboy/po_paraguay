/* Default options for all routes.
 * Options declared on specific route
 * will override these options.
 */
Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/', {name: 'home'});



/* Routes for static pages */
Router.route('/page1', function(){
	this.render('page1');
});
Router.route('/page2', function(){
	this.render('page2');
});
Router.route('/page3', function(){
	this.render('page3');
});
Router.route('/login', function(){
	this.render('login');
});
Router.route('/profileHome', function(){
	this.render('profileHome');
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
	except: ['home', 'page1', 'page2', 'page3']
});

/*
 * When a user logs in, take them to
 * the profile homepage
 */
Router.onBeforeAction(function(){
	if(Meteor.user() || Meteor.loggingIn()){
		this.render('profileHome');
	} else {
		this.next();
	}
}, {
	only: 'login'
});