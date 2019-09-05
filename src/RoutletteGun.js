import React from "react";

class RoutletteGun extends React.Component {
  // constructor(props) {}
  static defaultProps = {
    bulletInChamber: 8
  };

  state = {
    chamber: null,
    spinningTheChamber: false,
    text: ''
  };

   handleButtonClick = (e) => {
    this.timeout = setTimeout(() => twoSecondDelay(), 2000);
    const twoSecondDelay = () => {
      this.setState({ 
        spinningTheChamber: false,
        chamber: (Math.ceil(Math.random() * 8)),
      });
    };
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    let text;
    if(this.state.spinningTheChamber === true){
      text = 'spinning chamber, pulling trigger...'
    }else if(this.props.bulletInChamber === this.state.chamber){
      text = 'BANG!!!!'
    }else if(this.state.spinningTheChamber === false && this.props.bulletInChamber !== this.state.chamber && this.state.chamber !== null){
      text = 'you\'re safe!' 
    }else if(this.state.spinningTheChamber === false){
      text = ''
    }

    return (
        <div>
        <p>
          {text}
        </p>
        <button onClick={()=> {
            this.setState({spinningTheChamber: true});
            this.handleButtonClick(); 
            console.log(this.state.chamber);
        }
        }>
            Pull trigger
            </button>
     </div>
    );
  }
}

export default RoutletteGun;