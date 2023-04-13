import React, { useState } from 'react';
import mbjhero from './images/michaelbjordanhero.jpeg';
import haileybieberhero from './images/haileybieberhero.jpeg';
import {MBJIMAGES, HAILEYBIEBERIMAGES} from './celebrityImageLists';

const titleStyle = {
    backgroundColor: "#fff",
    border: "1px solid #000",
    padding: "5px",
    borderRadius: "5px"
  };

const ImageGallery = ({selectedOption}) => {
  let images = [];
  if(selectedOption === 'Michael B. Jordan'){
    images = MBJIMAGES;
  }
  else if(selectedOption === "Hailey Bieber"){
    images = HAILEYBIEBERIMAGES;
  }
  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <div className="gallery-item" key={index}>
          <a href={image.href} target="_blank"><img src={image.src} alt={`Image ${index}`} /></a>
        </div>
      ))}
    </div>
  );
};

const Header = ({selectedOption}) => {
  let heroImage;
  if(selectedOption === 'Michael B. Jordan'){
    heroImage = mbjhero;
  }
  else if(selectedOption === 'Hailey Bieber'){
    heroImage = haileybieberhero;
  }

  return (
    <header
      style={{ backgroundImage: `url(${heroImage})` }}
      className="header"
    >
    <div style={titleStyle}>
      <h1>{selectedOption}'s fits</h1>
    </div>
    </header>
  )
}


function App() {
  const [selectedOption, setSelectedOption] = useState('Michael B. Jordan');
  const options = ['Michael B. Jordan', 'Hailey Bieber'];

  return (
    <div className="App">
      <Header selectedOption={selectedOption} />
      <select value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <ImageGallery selectedOption={selectedOption}/>
    </div>
  );
}

export default App;
