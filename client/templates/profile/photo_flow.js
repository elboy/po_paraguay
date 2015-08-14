Template.photoFlow.onCreated(function(){
  Session.set("uploading", 0);
});


Template.photoFlow.helpers({
  // if a photo is uploading, show progress bar
  'uploading':function(){
    return Session.get("uploading");
  },
  'photos': function(){
    return Images.find({});
  }
});

Template.photoFlow.events({
  'click .delete':function(){
    // Remove instance from database
    Meteor.call("removeImage", this._id, function(e,r){
      if(e){
        throwError(e.reason);
      } else {
        throwWarning(r);
      }
    });
  },
  'click #upload-photo': function(){
    var order_id = this._id;
    addPhoto(order_id);
  },
  // Previous / Next buttons
  'click #personal-info': function(){
    // To update personal info
    Router.go('update', {_id: this._id});
  },
  'click #personalize-hand': function(){
    // Personalize
    Router.go('personalize.prosthetic', {_id: this._id});
  }
});


/**
 * helpers
 */
var imageDetails = {
  format: 'jpg',
  width: 250,
  height: 250,
  crop: 'thumb',
  effect: 'saturation:50'
};

function addPhoto(order_id){
  $('.upload-form').unsigned_cloudinary_upload("payouw7z", { 
    cloud_name: 'po-paraguay'
  }, {
    multiple: true
  }).bind('cloudinarydone', function (e, data) {
    data.result.user_id = Meteor.userId();
    data.result.order_id = order_id;

    // Add to database
    Meteor.call("addImage", data.result, function(e, r){
      if(e){
        throwError(e.reason);
      } else {
        throwWarning(r);
      }
    });
    // When the upload is done, add it to the view and the database
    //$('.thumbnails').append($.cloudinary.image(data.result.public_id, imageDetails));
    // To make the progress bar disappear
    Session.set("uploading", 0);

  }).bind('cloudinaryprogress', function (e, data){

    // While uploading, add it to the view and the database
    console.log("data loaded is : " + data.loaded + " data size : " + data.total);
    var percent = Math.round((data.loaded * 100.0) / data.total);
    $('.progress-bar').css('aria-valuenow', percent);
    $('.progress-bar').css('width', percent + '%');
    Session.set("uploading", percent);

  }).bind('fileuploadfail', function(e){
    throwError(e);
  });
}