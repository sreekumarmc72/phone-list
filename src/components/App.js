import React, { Component } from 'react';
import PhoneList from '../containers/PhoneList';
import AddPhone from '../containers/AddPhone';


class App extends Component {
  render() {
    return (
        <div className="App">
            <AddPhone />
            <PhoneList />
        </div>
    );
  }
}

export default App;
