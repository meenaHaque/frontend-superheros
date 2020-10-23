import React from 'react';
import Superheros from './Superheros'


function App() {
  return (
    <div className="App">
      <ol>
      {Superheros.map(hero => {
         return <li>{hero.name} - {hero.description}</li>
      })}
      </ol>
    </div>
  );
}

export default App;
