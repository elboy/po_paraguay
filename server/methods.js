// Server side cloudinary methods
Meteor.methods({
	// When client side remove image is clicked, delete isntance from database
	removeImage: function(imageId){
		Images.remove(imageId);
		return "Image removed";
	},
	addImage: function(data){
		Images.insert(data);
		return "Image inserted";
	}
});



/*

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

*/