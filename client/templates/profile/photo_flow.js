  /*
  Template.photoFlow.created = function(){
    Meteor.call("cloudinary_list_all",function(e,list){
      Session.set("image_list",list);
    });
  }

  Template.photoFlow.helpers({
    "stuff":function(){
      return {name:"something",_id:"12345"}
    },
    "saved_images":function(){
      return Images.find({});
    },
    "image_list":function(){
      return Session.get("image_list");
    }
  });

  Template.photoFlow.events({
    "click .delete":function(){
      Images.remove(this._id);
      Meteor.call("cloudinary_delete",this.public_id,function(e,r){
        if(!e){
          console.log(r);
        } else {
          console.log(e);
        }
      });
    }
  });
  */