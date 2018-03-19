const React = require('react');
const FansActions = require('../../actions/fanActions');
const toastr = require('toastr');


class FansList extends React.Component {
    constructor(props) {
        super(props);
    }

    deleteFan(fanId, event) {
        event.preventDefault();
        FansActions.deleteFan(fanId);
        toastr.success("Fan Deleted Succesfully");
    }

    render() {
        const createFanRow = (fan) => {
            return (
                <tr key={fan.id}>
                    <td><a href="#" onClick={(event) => this.deleteFan(fan.id, event)}>Delete</a></td>
                    <td>{fan.firstName}</td>
                    <td>{fan.lastName}</td>
                    <td>{fan.nickName}</td>
                </tr>
            )
        }

        return (
            <table className="table">
                <thead>
                    <th></th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>NickName</th>
                </thead>
                <tbody>
                    {this.props.fans.map(createFanRow)}
                </tbody>
            </table>
        );
    }
}

module.exports = FansList;