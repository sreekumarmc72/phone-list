import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Phone extends Component {
    
    render() {
        return (
        <li >
            <span onClick={e => this.props.markCostly(this.props.phone.id)}>>>markCostly</span>
            <span onClick={e => this.props.markLowCost(this.props.phone.id)}>>>markLowCost</span>
            --> {this.props.phone.name}
            {this.props.phone.costly === 'costly' && ' - costly'}
            {this.props.phone.costly === 'lowcost' && ' - low cost'}
        </li>  
        );
    }
}

Phone.propTypes = {
    phone   :   PropTypes.shape({
        id      :   PropTypes.number.isRequired,
        name    :   PropTypes.string.isRequired,
        costly  :   PropTypes.string.isRequired
    }).isRequired
}

export default Phone;
