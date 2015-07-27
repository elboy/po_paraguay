AutoForm.addHooks('updatePersonalization', {
  onError: function (operation, error, template) {
    console.log(error);
  },
  onSuccess: function(formType, result){
  	//Session.set('orderId', this.docId);
  	//Router.go('checkout', {_id: this.docId});
  }
});

Template.personalize.events({
	'click #personalize-back': function(){
		Router.go('photo.upload', {_id: this._id});
	},
	'click #personalize-continue': function(){
		Router.go('checkout', {_id: this._id});
	}
});