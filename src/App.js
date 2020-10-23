import React from 'react';

const superHeros = [
  {
    id: 1,
    name: "Wonderwoman",
    description: "Can be invisible"
  },
  {
    id: 2,
    name: "Spiderman",
    description: "Can climb walls"
  }
]


// function App() {
//   return (
//     <div className="App">
//       {superHeros.map(hero => {
//          return <h1>{hero.name}</h1>
//       })}
//     </div>
//   );
// }


function App() {
  return (
    <div className="App">
      <ol>
      {superHeros.map(hero => {
         return <li>{hero.name}</li>
      })}
      </ol>
    </div>
  );
}

export default App;
