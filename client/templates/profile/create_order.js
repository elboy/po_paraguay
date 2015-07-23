/*Template.createOrder.events({
	'submit #insertOrderForm': function(event){
		event.preventDefault();
		console.log("hello console");
	}
});*/

AutoForm.addHooks(null, {
  onError: function (operation, error, template) {
    console.log(error);
  }
});