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
      <img style={{width: '75%'}} src={props.path} alt={props.alt} />
    </div>
  </Modal>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      path: '',
      alt: 'Joe & Selah wedding and engagement photography'
    };
  }
  renderImageModal = (path = '') => {
    this.setState(prevState => ({ modal: !prevState.modal, path: path }));
  }
  render() {
    const renderImages = () => {
      return imagePaths.map((img, i) => {
        const path = require(`./assets/main-photos/${img}`);
        return (
          <div key={i} onClick={() => this.renderImageModal(path)}>
            <img style={{ maxWidth: '100%' }} src={path} alt={this.props.alt} />
          </div>
        );
      });
    };
    return (
      <div>
        <Header />
        <Hero mainText="More Than Just Moments" alt={this.props.alt} img={gc2} />
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
              gridTemplateRows: '1fr 1fr',
              gridGap: '10px',
              maxWidth: '100%'
            }}
          >
            {renderImages()}
          </div>
        </Section>
        <Section width="75%">
          <h3>Send us a message!</h3>
          <p>We'd love to learn about you and your wedding. Use the form below to give us the important details, and we'll be in touch with next steps.</p>
          <form id="contact">
            <input type="text"/>
          </form>
        </Section>
        {this.state.modal &&
          !!this.state.path && <ImageModal alt={this.props.alt} path={this.state.path} toggleModal={this.renderImageModal} />}
      </div>
    );
  }
}

export default App;
