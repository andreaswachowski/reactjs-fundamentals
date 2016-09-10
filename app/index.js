var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes')
var Raven = require('raven-js')

var sentryKey ='077f18e15f3f4ae896b980a810f8b5a4'
var sentryApp ='98119'
var sentryUrl ='https://' + sentryKey + '@sentry.io/' + sentryApp

var _APP_INFO = {
  name: 'Github Battle',
  branch: 'video4',
  version: '1.0'
};

Raven.config(sentryUrl, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch
  }
}).install()

ReactDOM.render(
  routes,
  document.getElementById('app')
);
