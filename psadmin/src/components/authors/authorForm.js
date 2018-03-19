const React = require('react');
const Input = require('../common/textInput');

class AuthorForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <form>
                <Input name="firstName" label="First Name" value={this.props.author.firstName} onChange={this.props.onChange} error={this.props.error.firstName}/>
                <Input name="lastName" label="Last Name" value={this.props.author.lastName} onChange={this.props.onChange} error={this.props.error.lastName}/>
                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave}/>
            </form>
        );
    }
}

AuthorForm.propTypes = {
    author: React.PropTypes.object.isRequired,
    onSave:  React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    error: React.PropTypes.object.isRequired
};


module.exports = AuthorForm;