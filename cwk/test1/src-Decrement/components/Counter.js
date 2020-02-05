import React from "react";

class Counter extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count - 1 });
  };
  addimage = () => {
    if (this.state.count >= 10) {
      return <img src="https://tinyurl.com/w7b5fd3" alt=''></img>
    }
  } // failed
  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          Click Counter!
        </div>
        <div className="card-body">
          <p className="card-text">Click Count: {this.state.count}</p>
          <button className="btn btn-primary" onClick={this.handleIncrement}>
          Increment
          </button>
          <button className="btn btn-danger" onClick={this.handleDecrement}>
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
