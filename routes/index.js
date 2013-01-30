
/*
 * GET home page.
 */

exports.login = function(req, res){
    res.render('user/login');
};

exports.document = function(req, res){
    res.render('document/index');
};

exports.partials = function (req, res) {
    var name = req.params.name;
    res.render('partials/' + name);
};