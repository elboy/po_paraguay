Template.checkout.events({
	'click #checkout-back': function(){
		Router.go('personalize.prosthetic', {_id: this._id});
	},
	'click #submit-order': function(){
		throwError('YOU COMPLETED THE ORDER');
	}
});