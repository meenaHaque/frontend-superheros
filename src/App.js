import React from 'react';
import Superheros from './Superheros'


function App() {
  return (
    <div className="App">
      <ol>
      {Superheros.map(hero => {
         return <li style={{color:"red", fontSize: "16px", padding: "10px 2px"}}>{hero.name} - {hero.description}</li>
      })}
      </ol>
    </div>
  );
}

export default App;
