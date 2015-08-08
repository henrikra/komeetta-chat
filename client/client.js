Template.chat.helpers({
});

Template.chat.events({
  'submit form': function(e) {
    e.preventDefault();
    if (Meteor.user()) {
      var newMessageBody = e.target.messageBody.value;
      var roomId = Router.current().params.roomId;
      Meteor.call('addMessage', newMessageBody, roomId);
      e.target.messageBody.value = '';
    } else {
      alert("Please login to chat");
    }
  }
});

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