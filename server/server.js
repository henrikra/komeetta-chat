Meteor.startup(function () {
  // code to run on server at startup
});

Meteor.methods({
  addMessage: function(newMessageBody, roomId) {
    if (newMessageBody && Meteor.userId()){
      var creatorId = Meteor.userId();
      var creatorUsername = Meteor.user().username
      ChatRooms.update(
        {_id: roomId},
        {
          $push: {
            messages: {
              body: newMessageBody,
              createdAt: new Date(),
              creatorId: creatorId,
              creatorUsername: creatorUsername
            }
          }
        }
      );
    }
  },
  addRoom: function() {
    if (Meteor.userId()) {
      return ChatRooms.insert({messages: []});
    }
  }
});

Meteor.publish('messages', function(roomId) {
  return ChatRooms.find({_id: roomId});
});