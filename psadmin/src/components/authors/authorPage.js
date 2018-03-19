const React = require('react');
const AuthorList = require('./authorList');
const AuthorStore = require('../../stores/authorStore');
const AuthorActions = require('../../actions/authorActions');

const Router = require('react-router');
const { Link } = Router;

class AuthorPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authors: AuthorStore.getAllAuthors()
        };
    }

    _onChange() {
        this.setState({
            authors: AuthorStore.getAllAuthors()
        });
    }

    componentWillMount() {
        AuthorStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        AuthorStore.removeChangeListener(this._onChange.bind(this));
    }

    render() {
        return (
            <div>
                <h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
}

module.exports = AuthorPage;