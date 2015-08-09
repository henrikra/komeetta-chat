Template.registerHelper('formatTime', function(date) {
	return moment(date).format('H:mm');
});

Template.registerHelper('formatDate', function(date) {
	return moment(date).format('D.M.YYYY @ H:mm');
});