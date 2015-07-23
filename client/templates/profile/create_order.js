AutoForm.addHooks('insertOrderForm', {
  onError: function (operation, error, template) {
    console.log(error);
  },
  onSuccess: function(formType, result){
  	Session.set('orderId', result);
  	Router.go('photo.upload', {_id: result});
  }
});