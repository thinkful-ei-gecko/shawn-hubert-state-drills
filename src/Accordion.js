import React from '.react';
import Sections from './Sections'

class Accordion extends React.Component {
  static defaultProps = {
    buttons: [],
  };
  state = {
    currentButtonIndex: 0
  };

    renderItem() {

      const button = this.props.Sections.map((button, index) => { 
        <li>
          <button key= {index}> {button.title}</button> 
          <p>{button.content}</p>
        </li>
        }
      
      return (
        <li className="accordion-item" key={Sections.title}>
          <button onClick="">{Sections.title}</button>
          <p>{Sections.content}</p>
        </li>
      );
    }

    render() {
      

      return(
      <ul className="accordion">

      </ul>
      )  
  }
}

export default Accordion;





