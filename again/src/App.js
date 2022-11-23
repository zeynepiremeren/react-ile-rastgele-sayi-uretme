import React, { useState } from 'react';
import './App.css';

function App() {

     const [minsay, setMinSay]= useState(0);
     const [maxsay, setMaxSay]= useState(1000);
     const [rastgele, setrastgele]= useState(5);

    const sayiyial =()=>{
      setrastgele(Math.floor(Math.random() * (maxsay-minsay +1) +minsay))
    }
 

  return (
    <div className="ana">
      <div className="container">
        <div className="rastgelesayi">
          <p>
            Rastgele Sayı: <span>{rastgele}</span>
          </p>
        </div>

           <div className="sayicon">
            <div>
              <p>Minimum:</p>
              <input type="number"
              value={minsay}
              onchange={e=> setMinSay(e.target.value)}
              />
            </div>
            
            <div>
              <p>Maximum:</p>
              <input type="number" 
              value={maxsay}
              onchange={e=> setMaxSay(e.target.value)}
              />
            </div>

           </div>
              <button onClick={sayiyial}    > Rastgele bir sayı seç </button>
      </div>
    </div>
  );
}

export default App;
