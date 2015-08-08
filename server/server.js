Meteor.startup(function () {
  // code to run on server at startup
});

Meteor.methods({
  addMessage: function(newMessageBody, roomId) {
    if (newMessageBody){
      ChatRooms.update(
        {_id: roomId},
        {
          $push: {
            messages: {
              body: newMessageBody,
              createdAt: new Date()
            }
          }
        }
      );
    }
  },
  addRoom: function() {
    return ChatRooms.insert({messages: []});
  }
});

Meteor.publish('messages', function(roomId) {
  return ChatRooms.find({_id: roomId});
});