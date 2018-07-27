import React, { Component } from 'react';
import Header from './Header';
import Hero from './Hero';
import Section from './Section';
import Card from './Card';
import Modal from './Modal';
import gc2 from './assets/gc-2.jpg';
import './App.css';
import './Modal.css';

const imagePaths = require
  .context('./assets/main-photos/', true, /\.(png|jpe?g|svg)$/)
  .keys()
  .map(i => i.replace('./', ''));

const ImageModal = props => (
  <Modal>
    <div className="modal" onClick={props.toggleModal}>
      <img style={{width: '75%'}} src={props.path} />
    </div>
  </Modal>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      path: ''
    };
  }
  renderImageModal = (path = '') => {
    this.setState(prevState => ({ modal: !prevState.modal, path: path }));
  }
  render() {
    const renderImages = () => {
      return imagePaths.map(i => {
        const path = require(`./assets/main-photos/${i}`);
        return (
          <div onClick={() => this.renderImageModal(path)}>
            <img style={{ maxWidth: '100%' }} src={path} />
          </div>
        );
      });
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
          <div
            style={{
              display: 'grid',
              gridAutoFlow: 'column',
              gridGap: '10px',
              maxWidth: '100%'
            }}
          >
            {renderImages()}
          </div>
        </Section>
        {this.state.modal &&
          !!this.state.path && <ImageModal path={this.state.path} toggleModal={this.renderImageModal} />}
      </div>
    );
  }
}

export default App;
