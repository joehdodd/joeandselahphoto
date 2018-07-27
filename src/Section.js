import React from 'react';

import './Section.css';

const Section = props => (
  <section>
    <div style={{ width: props.width }} className="section-wrapper">
      {props.children}
    </div>
  </section>
);

export default Section;
