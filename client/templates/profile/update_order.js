AutoForm.addHooks('updateOrderForm', {
  onError: function (operation, error, template) {
    console.log(error);
  },
  // this.docId is id of doc attached to the form
  onSuccess: function(formType, result){
  	//Session.set('orderId', this.docId);
  	Router.go('photo.upload', {_id: this.docId});
  }
});