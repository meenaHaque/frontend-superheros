import React from 'react';
import superheros from './superheros'


function App() {
  return (
    <div className="App">
      <ol>
      {superheros.map(hero => {
         return <li style={{color:"green", fontSize: "16px", padding: "10px 2px"}}>{hero.name} - {hero.description}</li>
      })}
      </ol>
    </div>
  );
}

export default App;
