import React from "react";
import renderer from "react-test-renderer";

class Bomb extends React.Component {
  state = {
    count: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => addSecond(), 1000);
    const addSecond = () => {
      this.setState({ count: this.state.count + 1 });
    };
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let word;

    if (this.state.count >= 8) {
      word = "BOOM!";
      this.componentWillUnmount(this.interval);
    } else if (this.state.count % 2 === 0) {
      word = "tick";
    } else if (this.state.count % 2 === 1) {
      word = "tock";
    }

    return (
      <div>
        {this.state.count}: {word}
      </div>
    );
  }
}

export default Bomb;
