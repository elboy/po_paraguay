Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {name: 'homePage'});
Router.route('/page1', {name: 'page1'});
Router.route('/page2', {name: 'page2'});
Router.route('/page3', {name: 'page3'});