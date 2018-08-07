import React, { Component } from 'react';


class Phone extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
        <li>
            {this.props.phone.name}
        </li>  
        );
    }
}

export default Phone;
