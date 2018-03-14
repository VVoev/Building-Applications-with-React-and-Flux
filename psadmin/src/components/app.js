const React = require('react');

const Home = require('./homepage');
const Header = require('./header');
const { RouteHandler } = require('react-router');

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <RouteHandler />
            </div>
        );
    }
}

module.exports = App;