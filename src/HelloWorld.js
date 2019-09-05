import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

class HelloWorld extends React.Component {
   state = {
       who: 'world'
  };
   


   
   render() {
       return (
           <div className="contentToggle">
               <p> Hello {this.state.who}</p>
               <button onClick={()=> this.setState({who: 'world'})}>World!</button>
               <button onClick={()=> this.setState({who: 'friend'})}>Friend!</button>
               <button onClick={()=> this.setState({who: 'react'})}>React!</button>
               {this.state.who && <div>I'm showing</div>}
           </div>
       );
   }
};

export default HelloWorld;


