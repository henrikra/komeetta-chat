Template.chat.helpers({
});

Template.chat.events({
  'submit form': function(e) {
    e.preventDefault();
    var newMessageBody = e.target.messageBody.value;
    var roomId = Router.current().params.roomId;
    Meteor.call('addMessage', newMessageBody, roomId);
    e.target.messageBody.value = '';
  }
});

Template.home.events({
  'click button': function() {
    Meteor.call('addRoom', function(err, result) {
      var newRoomId = result;
      Router.go('chat', {roomId: newRoomId});
    });  
  }
});