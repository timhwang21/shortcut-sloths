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
var Level2 = require('./components/level2');
var Level3 = require('./components/level3');
var Level4 = require('./components/level4');

var routes = (
  <Route path="/" component={App}>
    <IndexRedirect to="1" />
    <Route path="1" component={Level1} />
    <Route path="2" component={Level2} />
    <Route path="3" component={Level3} />
    <Route path="4" component={Level4} />
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