Template.photoFlow.created = function(){
/*
  Meteor.call("cloudinary_list_all",function(e,list){
    console.log(list);
    Session.set("image_list",list);
  });
*/
  return Session.set('anyImages', 0);
}


Template.photoFlow.helpers({
  // saved_images gets images corresponding to this order
  'saved_images':function(){
    var images = Images.find({});
    Session.set('anyImages', images.count());
    return images;
  }
/*
  ,
  'image_list':function(){
    return Session.get("image_list");
  }
*/
});

Template.photoFlow.events({
  'click .delete':function(){
    // Remove instance from database
    Images.remove(this._id);
    // Remove photo from cloudinary
    Meteor.call("cloudinary_delete",this.public_id,function(e,r){
      if(!e){
        console.log(r);
      } else {
        console.log(e);
      }
    });
  },
  'click #personalize-hand': function(){
    // A user must submit photos before continuing.
    if(Session.get('anyImages')){
      Router.go('personalize.prosthetic', {_id: this._id});
    } else {
      console.log("you must submit images first");
    }
  }
});