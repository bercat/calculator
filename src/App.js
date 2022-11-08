import { useReducer } from 'react';

import './style/App.css';

function App() {
  //keeping track of multiple pieces of state
  const [state, dispatch] = useReducer()

  return (
    <div className="container-grid">
      {/* the input inside of our calc  */}
      <div className='output'>
        <div className="previous-minnelokasjon"> </div>
        <div className="current-minnelokasjon"> </div>
      </div>
       {/* buttons inside of our css grid  */}
       <button className="spantwo">AC</button>
       <button>DEL</button>
       <button>÷</button>
       <button>1</button>
       <button>2</button>
       <button>3</button>
       <button>*</button>
       <button>4</button>
       <button>5</button>
       <button>6</button>
       <button>+</button>
       <button>7</button>
       <button>8</button>
       <button>9</button>
       <button>-</button>
       <button>.</button>
       <button>0</button>
       <button className='span-two'>=</button>
    </div>
  );
}

export default App;
