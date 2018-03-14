const React = require('react');
const Router = require('react-router');

const { DefaultRoute, Route } = Router;

const routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <Route name="home" handler={require('./components/homepage')} />
        <Route name="authors" handler={require('./components/authorpage')} />
        <Route name="about" handler={require('./components/aboutPage')} />
    </Route>
);

module.exports = routes; 