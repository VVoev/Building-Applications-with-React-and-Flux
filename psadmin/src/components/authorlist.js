import React from 'react';

const authorlist = (author) => {
    return (
        <div>
            <tr key={author.id}>
                <td><a href={`#/authors/${author.id}`}>{author.id}</a></td>
                <td>{author.firstName} {author.lastName}</td>
            </tr>


            <div>
                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {this.props.authors.map(createAuthorRow)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

AuthorList.propTypes = {
    authors: React.PropTypes.array.isRequired
};

export default authorlist;