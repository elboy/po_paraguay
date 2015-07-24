AutoForm.addHooks('updatePersonalization', {
  onError: function (operation, error, template) {
    console.log(error);
  },
  onSuccess: function(formType, result){
  	Session.set('orderId', this.docId);
  	Router.go('checkout', {_id: this.docId});
  }
});