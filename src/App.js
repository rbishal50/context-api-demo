import React, { Component } from 'react';

// first make a new context
const MyContext = React.createContext();

// then create a provider component
class MyProvider extends Component {
    state = {
      name: 'Bishal',
      age: 100,
      cool: true
  }
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({
          age: this.state.age + 1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}


const Family = (props) => (
  <div className="Family">
    <Person />
  </div>
)

class Person extends Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {(context) => (
            <div>
              <p>Name: {context.state.name}</p>
              <p>Age: {context.state.age}</p>
              <button onClick={context.growAYearOlder}>Add</button>
            </div>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className="App">
          <p>This is my app</p>
          <Family />
        </div>
      </MyProvider>
    );
  }
}



export default App;
