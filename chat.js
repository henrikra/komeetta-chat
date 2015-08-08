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
  waitOn: function() {
    this.subscribe('messages', this.params.roomId);
  },
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