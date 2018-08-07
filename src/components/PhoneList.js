import React, { Component } from 'react';
import Phone from './Phone';


class PhoneList extends Component {
    
    render() {
        return (
            <ul>
                {this.props.phones.map(phone => <Phone key={phone.id} phone={phone} markCostly={this.props.markCostly} markLowCost={this.props.markLowCost}/>)}
            </ul>  
        );
    }
}

export default PhoneList;
