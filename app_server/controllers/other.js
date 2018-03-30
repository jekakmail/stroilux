module.exports.contacts = function(req, res) {
    res.render('contacts', { title: 'Contacts' });
};

module.exports.about = function(req, res) {
    res.render('index', { title: 'About' });
};
