// Server side cloudinary methods
Meteor.methods({
	save_url: function(image){
		//image has context and upload_data
		//Save to a collection
		var data = image.upload_data;
		data.user_id = this.userId;
		data.order_id = image.context._id;
		console.log("data:", data);
		console.log("image:", image);
		Images.insert(data);
	}
});