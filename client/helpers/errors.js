// Local (client only) collection
Alerts = new Mongo.Collection(null);

throwError = function(message){
	Alerts.insert({
		message: message,
		color: "alert-danger"
	});
};

throwInfo = function(message){
	Alerts.insert({
		message: message,
		color: "alert-info"
	})
};

throwWarning = function(message){
	Alerts.insert({
		message: message,
		color: "alert-warning"
	})
};