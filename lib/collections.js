ChatRooms = new Mongo.Collection('chatrooms');

var imageStore = new FS.Store.GridFS('images');

Images = new FS.Collection('images', {
 stores: [imageStore]
});

// Annetaan käyttäjälle oikeudet hakea ja inserttaa dokumentteja kuvakantaan
Images.allow({
	insert: function(){
		return true;
	},
	download: function(){
		return true;
	}
});