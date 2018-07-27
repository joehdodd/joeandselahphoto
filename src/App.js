import React, { Component } from 'react';
import Header from './Header';
import Hero from './Hero';
import Section from './Section';
import Card from './Card';
import gc2 from './assets/gc-2.jpg';
import './App.css';

const imagePaths = require
  .context('./assets/main-photos/', true, /\.(png|jpe?g|svg)$/)
  .keys()
  .map(i => i.replace('./', ''));

class App extends Component {
  render() {
    const renderImages = () => {
      return imagePaths.map(i => (
        <img
          style={{ maxWidth: '100%' }}
          src={require(`./assets/main-photos/${i}`)}
        />
      ));
    };
    return (
      <div>
        <Header />
        <Hero mainText="More Than Just Moments" img={gc2} />
        <Section width="50%">
          <Card textAlign="center">
            We are Joe & Selah -- husband and wife wedding photographers on the
            Eastern Shore of Maryland.
          </Card>
        </Section>
        <Section width="75%">
          <div style={{ display: 'grid', gridAutoFlow: 'column', gridGap: '10px', maxWidth: '100%' }}>
            {renderImages()}
          </div>
        </Section>
      </div>
    );
  }
}

export default App;
