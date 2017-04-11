/** ---------- REQUIRE NODE MODULES ---------- **/
var express = require('express');

/** ---------- REQUIRE CUSTOM APP MODULES ---------- **/
var path = require('path');

/** ---------- EXPRESS APP CONFIG ---------- **/
var app = express();
app.use('/public', express.static('public'));  // serve files from public

app.get('/*', function (req, res) {
    var file = req.params[0] || '../../public/views/index.html';
    res.sendFile(path.join(__dirname, '/public/', file));
  });
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

/** ---------- DATABASE CONNECTION HANDLING ---------- **/

/** ---------- ROUTES ---------- **/
// app.use('/', index);

/** ---------- SERVER START ---------- **/
app.set('port', process.env.PORT || 5555);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
