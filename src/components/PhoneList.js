import React, { Component } from 'react';
import Phone from './Phone';


class PhoneList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.phones.map(phone => <Phone key={phone.id} phone={phone} />)}
            </ul>  
        );
    }
}

export default PhoneList;
