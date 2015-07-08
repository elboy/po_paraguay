Router.configure({
	layoutTemplate: 'layout',
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

/* Post login route */
/*
this.route('profileHome', {
  path: '/signinPage',
  onBeforeAction: function () {
    if (! Meteor.user()) {
      if (!Meteor.loggingIn()) {
      	Router.go('/signinPage');
      }
    }
  }
}
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