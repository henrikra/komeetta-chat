Template.chatMessage.onRendered(function() {
  $('.chat-window--body').scrollTop( $('.chat-window--body').prop("scrollHeight") );
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