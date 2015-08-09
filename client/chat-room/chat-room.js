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