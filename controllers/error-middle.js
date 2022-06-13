const path = require('path');

module.exports.error = (req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page not found' });
}