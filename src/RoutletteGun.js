import React from "react";

class RoutletteGun extends React.Component {
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
        chamber: 8/*(Math.ceil(Math.random() * 8))*/,
        spinningTheChamber: true
      });
    };
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }


//   triggerPulled() {
//     this.setState({ spinningTheChamber: true });
//     text = 'spinning chamber, pulling trigger...';
//   }

  render() {
    let text;
    if(this.state.spinningTheChamber === true) {
      text = 'spinning chamber, pulling trigger...'
    }
    if (this.state.spinningTheChamber === this.state.chamber){
      text = 'BANG!!!!'
    }  
    if (this.state.spinningTheChamber !== this.state.chamber){
      text = 'you\'re safe!'
    } else {
      text = '' 
    }

    return (
        <div>
        <p>
      {text}
        </p>
        <button onClick={()=> this.setState({spinningTheChamber: true})
          //this.setState({ spinningTheChamber: true });
        }>
            Pull trigger
            </button>
     </div>
    );
  }
}

export default RoutletteGun;