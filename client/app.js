Template.editor.events = {
	'click #gerar-coding': function() {
		InsertElements();
	}
}

var InsertElements = function() {
	var user = "bernard",
		project = "estante",
		corTexto = $("#color-text").val(),
		bgTexto = $("#background-color").val(),
		sizeTexto = $("#font-size").val(),
		lineHeight = $("#line-height").val(),
		textDecoration = $("#text-decoration").val(),
		fontStyle = $("#font-style").val();

	Elements.insert({
		user: user,
		project: project,
		corTexto: corTexto,
		bgTexto: bgTexto,
		sizeTexto: sizeTexto,
		lineHeight: lineHeight,
		textDecoration: textDecoration,
		fontStyle: fontStyle
	});

	alert("Dados gravados com sucesso");
}

Template.profile.elements = function() {
	return Elements.find({user: Session.get("username")});
};


//Responsavél pelas rotas
Template.main.hasUrl = function() {
	return Session.get("url") !== undefined && Session.get("url") !== "profile";
};

Template.main.isProfile = function() {
	return Session.get("url") === "profile";
};