const React = require('react');
const FanList = require('./fansList')

const { Link } = require('react-router');

class FansPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Fans Page</h1>
                <Link to="addFan" className="btn btn-default">Add Fans</Link>
                <FanList />
            </div>
        );
    }
}

module.exports = FansPage;