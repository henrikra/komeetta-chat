Router.configure({
  layoutTemplate: 'main',
  loadingTemplate: 'loading'
});

Router.route('/', {
  name: 'home',
  template: 'home'
});

Router.route('/profile', {
  name: 'profile',
  template: 'profile'
});

Router.route('/:roomId', {
  name: 'chat',
  loadingTemplate: 'loading',
  waitOn: function() {
    return [
      Meteor.subscribe('messages', this.params.roomId),
      Meteor.subscribe('userAvatars')
    ];
  },
  action: function () {
    this.render('chat');
  },
  data: function() {
    return ChatRooms.findOne({_id: this.params.roomId});
  }
});