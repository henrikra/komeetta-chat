Template.home.events({
  'click button': function() {
    if (Meteor.user()) {
      Meteor.call('addRoom', function(err, result) {
        var newRoomId = result;
        Router.go('chat', {roomId: newRoomId});
      });
    } else {
      alert("Please login to make new chat room");
    }
  }
});

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});