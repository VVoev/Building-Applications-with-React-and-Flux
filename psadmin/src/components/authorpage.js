const React = require('react');
const authorApi = require('../api/authorApi');

class AuthorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: []
        }
    }

    componentWillMount() {
        this.state.authors = authorApi.getAllAuthors();
        console.log(this.state.authors);
    }
    render() {
        const createAuthorRow = (author) => {
            return (
                <tr key={author.id}>
                    <td><a href={`#/authors/${author.id}`}>{author.id}</a></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };

        return (
            <div>
                <h1>Authors</h1>
                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {this.state.authors.map(createAuthorRow)}
                    </tbody>
                </table>
            </div>
        );
    }
}



module.exports = AuthorPage;