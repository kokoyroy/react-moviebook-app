import React from 'react';
import './app.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
function App(): JSX.Element {
  return (
    <div >
      <Header />
      <Hero />
    </div>
  );
}

export default App;
