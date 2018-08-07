import React, { Component } from 'react';


class AddPhone extends Component {
    input;

    render() {
        return (
            <div>
                <form onSubmit={e => {
                        e.preventDefault();
                        if(!this.input.value.trim())return;
                        this.props.addPhone(this.input.value);
                        this.input.value = '';
                    }}>
                    <input type="text" ref={node => this.input = node} placeholder="Phone Name"/>
                    <button> ADD </button>
                </form>
            </div> 
        );
    }
}

export default AddPhone;
