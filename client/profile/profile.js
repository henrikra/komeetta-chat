Template.profile.events({
  'submit form': function(event, template) {
  event.preventDefault();
  var selectedImage = event.target.profileImageInput.files[0];

  if (selectedImage) {
    var fsFile = new FS.File(selectedImage);
    Images.insert(fsFile, function (err, fileObj) {
      if (err){
         console.log(err);
      } else {
         // handle success depending what you need to do
        var userId = Meteor.userId();
        var imagesURL = 'cfs/files/images/' + fileObj._id;
        Meteor.call('updateProfilePicture', userId, imagesURL);
      }
    });
  }
    
  }
});