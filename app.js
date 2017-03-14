
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

var index = require('./routes/index');
var my_profile = require('./routes/myProfile');
var settings = require('./routes/settings');
var groups = require('./routes/groups');
var ginfo = require('./routes/groupsinfo');
var logoff = require('./routes/logOff');
var login = require('./routes/login');
var wrong = require('./routes/wrong');
var contact = require('./routes/contact');
var add_new_account = require('./routes/addNewAccount');
var search_contact = require('./routes/addNewAccount');
var search_result = require('./routes/searchResult');
var search_result_all = require('./routes/searchResultAll');
var select_info = require('./routes/selectInfo');
var confirm = require('./routes/confirm');
var done = require('./routes/done');
var create_new_acc = require('./routes/createNewAcc');
var edit_profile = require('./routes/editProfile');
var add = require('./routes/editProfile');
var newUser = require('./routes/createNewAcc');
var invite = require('./routes/invite');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', login.view);
app.get('/check-login', login.checkLogin);
app.get('/wrong', wrong.view);

app.get('/home', index.view);
app.get('/my-profile', my_profile.view);
app.get('/settings', settings.view);
app.get('/addSetting', settings.addSetting);

app.get('/groups', groups.view);
app.get('/groupsInfo/:id', ginfo.gInfo);
app.get('/logoff', logoff.view);
//app.get('/login', login.view);
app.get('/contact/:id', contact.view);

app.get('/add_new_account', add_new_account.view);
app.get('/search-contact', search_contact.searchContact);

app.get('/search_result', search_result.view);
app.get('/addRecp', search_result.storeRecp);

app.get('/search_result_all', search_result_all.view);
app.get('/select_info', select_info.view);
app.get('/confirm', confirm.view);
app.get('/done', done.view);
app.get('/create-account', create_new_acc.view);
app.get('/edit-profile', edit_profile.view);
app.get('/add', add.addInfo);
app.get('/new-user', newUser.createNewUser);
app.get('/invite', invite.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
