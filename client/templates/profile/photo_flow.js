Template.photoFlow.onCreated(function(){
  Session.set("uploading", 0);
});

Template.photoFlow.onRendered(function() {
  $('.upload-form').unsigned_cloudinary_upload("payouw7z", { 
    cloud_name: 'po-paraguay'
  }, {
    multiple: true
  }).bind('cloudinarydone', function (e, data) {
    $('.thumbnails').append($.cloudinary.image(data.result.public_id, {
      format: 'jpg',
      width: 250,
      height: 250,
      crop: 'thumb',
      //gravity: 'face',
      effect: 'saturation:50'
    }));
    Session.set("uploading", 0);
  }).bind('cloudinaryprogress', function (e, data){
    console.log("data loaded is : " + data.loaded + " data size : " + data.total);
    var percent = Math.round((data.loaded * 100.0) / data.total);
    $('.progress-bar').css('aria-valuenow', percent);
    $('.progress-bar').css('width', percent + '%');
    Session.set("uploading", percent);
  });
});


Template.photoFlow.helpers({
  // if a photo is uploading, show progress bar
  'uploading':function(){
    return Session.get("uploading");
  }
});

Template.photoFlow.events({
  'click .delete':function(){
    throwWarning("Deleted Photo");
    // Remove instance from database
    Meteor.call("removeImage", this._id, function(e,r){
      if(e){
        throwError(e.reason);
      } else {
        console.log(r);
      }
    });
  },
  'click .upload': function(){
    throwInfo("Uploading photo");
  },

  // Previous / Next buttons
  'click #personal-info': function(){
    // To update personal info
    Router.go('update', {_id: this._id});
  },
  'click #personalize-hand': function(){
    // A user must submit photos before continuing.
    if(Session.get('anyImages')){
      Router.go('personalize.prosthetic', {_id: this._id});
    } else {
      throwError("You must submit a photo first");
    }
  }
});