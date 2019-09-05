import React from '.react';
import Sections from './Sections'

class Accordion extends React.Component {
  constructor(props)
    super(props)

    renderItem() {
      return (
        <li className="accordion-item" key={Sections.title}>
          <button onClick="">{Sections.title}</button>
          <p>{Sections.content}</p>
        </li>
      );
    }

    render() {
      <ul className="accordion">

      </ul>
    }
}

export default Accordion