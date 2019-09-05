import React from "react";


class RoutletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 8
  };

  state = {
    chamber: null,
    spinningTheChamber: false
  };


   componentDidMount() {
    this.timeout = setTimeout(() => twoSecondDelay(), 2000);
    const twoSecondDelay = () => {
        this.setState({ chamber: (Math.ceil(Math.random() * 8))});
        this.setState({ spinningTheChamber: false });
    };
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
    else {
         text = ''
    }
    return (
        <div>
        <p>
      {text}
        </p>
        <button onClick={()=> {
            this.setState({ spinningTheChamber: true });
        }}>
            Pull trigger
            </button>
     </div>
    );
  }
}

export default RoutletteGun;