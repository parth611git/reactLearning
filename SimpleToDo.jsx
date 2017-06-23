import React from 'react';
import ReactDOM from 'react-dom';

class SimpleToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameList: [],
            inputName: "Hello.."
        }
        this.addNameToList = this.addNameToList.bind(this);

    }

    addNameToList(formData) {
        var names = this.state.nameList;
        names.push(formData);
        this.setState({ names });
    }

    render() {
        return (
            <div>
                <SimpleForm addNames={this.addNameToList} />

                <SimpleList names={this.state.nameList} />

            </div>
        );
    }

}

class SimpleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: ''
        };
        this.localSubmit = this.localSubmit.bind(this);
        this.updateState = this.updateState.bind(this);
    }
    localSubmit(e) {
        e.preventDefault();
        this.props.addNames(this.state);
    }

    updateState(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    render() {
        return (
            <div>
                <input id="fname" placeholder="First Name" ref="firstName" value={this.state.firstName} onChange={this.updateState}
                />
                <input id="lname" placeholder="Last Name" ref="lastName" value={this.state.lastName} onChange={this.updateState}
                />
                <button onClick={this.localSubmit}>Add</button>
            </div>
        );
    }
}

class SimpleList extends React.Component {

    render() {

        var nameArr = "";

        if (this.props.names != undefined) {
            nameArr = this.props.names.map(function (name, i) {
                return <Name key={i} nameVal={name} />;
            });
        }

        return (
            <div>
                <br />
                <h4>Name List</h4>
                <table frameBorder="1">
                    <tbody>
                        {nameArr}
                    </tbody>
                </table>

            </div>
        );
    }
}

class Name extends React.Component {
    render() {

        return (
            <tr>
                <td>{this.props.nameVal.fname}
                </td>
                <td>{this.props.nameVal.lname}
                </td>
            </tr>
        );
    }
}
export default SimpleToDo;