const React = require('react');

class AuthorList extends React.Component {
    constructor(props) {
        super(props);
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
            <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {this.props.authors.map(createAuthorRow)}
                    </tbody>
            </table>
        );
    }
}

AuthorList.propTypes = {
    authors: React.PropTypes.array.isRequired
};

module.exports = AuthorList;