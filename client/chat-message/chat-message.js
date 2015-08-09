Template.chatMessage.onRendered(function() {
  $('.chat-window--body').scrollTop( $('.chat-window--body').prop("scrollHeight") );
  
  var placement = 'right';
  if (this.$('.chat-message').hasClass('own-message')) {
  	placement = 'left';
	}
  this.$('[data-toggle="popover"]').popover({
  	trigger: 'hover',
  	placement: placement
  });

  this.$(".chat-message").hide().fadeIn(500);
  
});

Template.chatMessage.helpers({
  ownMessageClass: function() {
    postCreatorId = this.creatorId;
    currentUserId = Meteor.userId();
    if (postCreatorId === currentUserId) {
      return 'own-message';
    }
  },
  ownMessagePictureClass: function() {
    postCreatorId = this.creatorId;
    currentUserId = Meteor.userId();
    if (postCreatorId === currentUserId) {
      return 'col-xs-push-11';
    }
  },
  ownMessageBodyClass: function() {
    postCreatorId = this.creatorId;
    currentUserId = Meteor.userId();
    if (postCreatorId === currentUserId) {
      return 'col-xs-push-1';
    }
  },
  ownMessageMetaClass: function() {
    postCreatorId = this.creatorId;
    currentUserId = Meteor.userId();
    if (postCreatorId === currentUserId) {
      return 'col-xs-pull-10';
    }
  }
});