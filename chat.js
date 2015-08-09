ChatRooms = new Mongo.Collection('chatrooms');

Router.configure({
  layoutTemplate: 'main',
  loadingTemplate: 'loading'
});

Router.route('/', {
  name: 'home',
  template: 'home'
});

Router.route('/:roomId', {
  name: 'chat',
  loadingTemplate: 'loading',
  waitOn: function() {
    return Meteor.subscribe('messages', this.params.roomId);
  },
  action: function () {
    this.render('chat');
  },
  data: function() {
    return ChatRooms.findOne({_id: this.params.roomId});
  }
});