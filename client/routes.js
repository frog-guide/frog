var Routes = Backbone.Router.extend({
	routes: {
		"": "root",
		"user\/:username": "profile",
		"project\/:projecname": "project"
	},
	root: function() {
		Session.set("url", undefined);
	},
	profile: function(username){
		Session.set("username", username);
		Session.set("url", "profile");
	},
	project: function(projecname) {
		Session.set("projecname", projecname);
		Session.set("url", "project");
	}
});

Meteor.startup(function() {
	var router = new Routes();

	Backbone.history.start({pushState: true});

});