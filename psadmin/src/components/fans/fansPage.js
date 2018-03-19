const React = require('react');
const FanList = require('./fansList')

const FansStore = require('../../stores/fanStore');
const FansActions = require('../../actions/fanActions');

const { Link } = require('react-router');

class FansPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fans: FansStore.getAllFans()
        };
    }
    _onChange() {
        this.setState({
            authors: FansStore.getAllFans()
        });
    }
    componentWillMount() {
        FansStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        FansStore.removeChangeListener(this._onChange.bind(this));
    }
    render() {
        return (
            <div>
                <h1>Fans Page</h1>
                <Link to="addFan" className="btn btn-default">Add Fans</Link>
                <FanList fans={this.state.fans} />
            </div>
        );
    }
}

module.exports = FansPage;