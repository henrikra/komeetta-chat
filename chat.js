ChatRooms = new Mongo.Collection('chatrooms');

Router.configure({
  layoutTemplate: 'main'
});

Router.route('/', {
  template: 'home'
});

Router.route('/:roomId', {
  name: 'chat',
  template: 'chat',
  data: function() {
    var currentRoomId = this.params.roomId;
    return { messages: ChatRooms.find({roomId: currentRoomId}) };
  }
});

if (Meteor.isClient) {

  Template.chat.helpers({
  });

  Template.chat.events({
    'submit form': function(e) {
      e.preventDefault();
      console.log(this);
      var messageBody = e.target.messageBody.value;
      ChatRooms.insert({
        roomId: Router.current().params.roomId,
        body: messageBody
      });
      e.target.messageBody.value = '';
    }
  });

  Template.home.events({
    'click button': function() {
      Router.go('chat', {roomId: Random.id(6)});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

  Meteor.methods({
    'removeChatRooms': function() {
      return ChatRooms.remove({});
    }
  });
}
