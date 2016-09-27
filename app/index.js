var ReactDOM = require('react-dom');
import routes from './config/routes';
var Raven = require('raven-js');

var sentryKey = '077f18e15f3f4ae896b980a810f8b5a4';
var sentryApp = '98119';
var sentryUrl = 'https://' + sentryKey + '@sentry.io/' + sentryApp;

var APP_INFO = {
  name: 'Github Battle',
  branch: 'video4',
  version: '1.0'
};

window.onerror = function() {
  Raven.showReportDialog();
};

Raven.config(sentryUrl, {
  release: APP_INFO.version,
  tags: {
    branch: APP_INFO.branch
  }
}).install();

ReactDOM.render(
  routes,
  document.getElementById('app')
);
