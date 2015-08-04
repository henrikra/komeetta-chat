MessagesList = new Meteor.Collection('messages');

if (Meteor.isClient) {

  Template.chat.helpers({
    messages: function () {
      return MessagesList.find();
    }
  });

  Template.chat.events({
    'submit form': function (e) {
      e.preventDefault();
      var messageBody = e.target.messageBody.value;
      MessagesList.insert({
        body: messageBody
      });
      e.target.messageBody.value = '';
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
