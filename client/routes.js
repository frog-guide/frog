var Routes = Backbone.Router.extend({
	routes: {
		"": "root",
		"user\/:username": "profile"
	},
	root: function() {
		Session.set("url", undefined);
	},
	profile: function(username){
		Session.set("username", username);
		Session.set("url", "profile");
	}
});

Meteor.startup(function() {
	var router = new Routes();

	Backbone.history.start({pushState: true});

});