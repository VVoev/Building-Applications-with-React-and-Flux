const React = require('react');


class FansList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const createFanRow = (fan) => {
            return (
                <tr key={fan.id}>
                    <td>{fan.firstName} {fan.lastName} {fan.nickName}</td>
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
                {/* <tbody>
                    {this.props.fans.map(createFanRow)}
                </tbody> */}
            </table>
        );
    }
}

module.exports = FansList;