var express    = require('./librairies');

_ERR           = require('./model/codeerreur');
_modeltools    = require('./model/tools');
_modelobj      = require('./model/object');
_modelcons     = require('./model/cons');
_modelcompte   = require('./model/compte');
_modeldb       = require('./db/db');


require('./routes/auth')();
//require('./routes/services')();
//require('./routes/router')();

var _PORT      = _modelcons.PORT;

http.createServer(app).listen(_PORT, function() {
  console.log('Express server listening on port ' + _PORT);
});