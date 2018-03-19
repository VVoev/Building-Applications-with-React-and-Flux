const React = require('react');
const Input = require('../common/textInput');

class FanForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <Input name="firstName" label="First Name" value={this.props.fan.firstName} onChange={this.props.onChange} error={this.props.error.firstName} />
                <Input name="lastName" label="Last Name" value={this.props.fan.lastName} onChange={this.props.onChange} error={this.props.error.lastName} />
            </form>
        );
    }
}



module.exports = FanForm;