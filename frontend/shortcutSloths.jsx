// REACT
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var IndexRedirect = require('react-router').IndexRedirect;
var hashHistory = require('react-router').hashHistory;

var App = require('./components/app');
var Level1 = require('./components/level1');

var routes = (
  <Route path="/" component={App}>
    <IndexRedirect to="1" />
    <Route path="1" component={Level1} />
  </Route>
  );

$(function(){
  ReactDOM.render(
    <Router history={hashHistory}>
      {routes}
    </Router>,
    document.getElementById('root')
  );
});