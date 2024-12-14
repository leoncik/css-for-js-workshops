import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';
import BackgroundDecorator from './components/BackgroundDecorator';

function App() {
  return (
    <>
      <BackgroundDecorator />
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
