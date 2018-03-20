
const React = require('react');
const Router = require('react-router');

const { DefaultRoute, Route, NotFoundRoute, Redirect } = Router;

const routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')} />
        <Route name="about" handler={require('./components/about/aboutPage')} />

        <Route name="courses" handler={require('./components/courses/coursePage')} />
        <Route name="authors" handler={require('./components/authors/authorPage')} />  
        <Route name="fans" handler={require('./components/fans/fansPage')} />         

        <Route name="addAuthor" path="author" handler={require('./components/authors/manageAuthorPage')} />
        <Route name="addCourse" path="course" handler={require('./components/courses/manageCoursePage')} />
        <Route name="addFan" path="fan" handler={require('./components/fans/manageFansPage')} />

        <Route name="manageCourse" path="course/:id" handler={require('./components/courses/manageCoursePage')} />
        <Route name="manageAuthor" path="author/:id" handler={require('./components/authors/manageAuthorPage')} />
        <Route name="manageFan" path="fan/:id" handler={require('./components/fans/manageFansPage')} />
        
        <NotFoundRoute handler={require('./components/common/notFoundPage')} />
        <Redirect from="about-us" to="about" />
        <Redirect from="awthors" to="authors" />
        <Redirect from="about/*" to="about" />
    </Route>
);

module.exports = routes;