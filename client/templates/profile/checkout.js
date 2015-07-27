Template.checkout.events({
	'click #checkout-back': function(){
		Router.go('personalize.prosthetic', {_id: this._id});
	},
	'click #submit-order': function(){
		console.log('YOU COMPLETED THE ORDER');
	}
});