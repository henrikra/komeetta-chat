ChatRooms = new Mongo.Collection('chatrooms');

Router.configure({
  layoutTemplate: 'main'
});

Router.route('/', {
  name: 'home',
  template: 'home'
});

Router.route('/:roomId', {
  name: 'chat',
  template: 'chat',
  data: function() {
    var currentRoom = ChatRooms.findOne({_id: this.params.roomId});
    // Redirect to home if room id is wrong
    if (currentRoom === undefined) {
      this.render('home');
    } else {
      this.render('chat', {data: currentRoom});
    }
  }
});

if (Meteor.isClient) {

  Template.chat.helpers({
  });

  Template.chat.events({
    'submit form': function(e) {
      e.preventDefault();
      var newMessageBody = e.target.messageBody.value;
      if (newMessageBody){
        ChatRooms.update(
          {_id: Router.current().params.roomId},
          {
            $push: {
              messages: {
                body: newMessageBody,
                createdAt: new Date()
              }
            }
          }
        );
        e.target.messageBody.value = '';
      }
    }
  });

  Template.home.events({
    'click button': function() {
      var newRoomId = ChatRooms.insert({
        messages: []
      });
      Router.go('chat', {roomId: newRoomId});
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
