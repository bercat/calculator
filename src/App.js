import { useReducer } from 'react';
import DigitButton from './components/DigitButton';
import './style/App.css';


//putting the actions into a global variable
export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR_OUT: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE_OPTION: 'evaluate'

}


function App() {

  //-takes inn our default state and manage all of our state
  //action is what we pass into this dispatch function  
  //we have different types of those actions
  //-then the reducer() return our new updated state 
  function reducer(state, { type, payload }) {
    switch (type) {
      case ACTIONS.ADD_DIGIT:
        return {...state, currentMinnelokasjon: `${currentMinnelokasjon || ""}${payload.digit}`}
        
    
      default:
        return state
    }
  }


  // We should determine multiple pieces of state.
  // (previous-minnelokasjon, current-minnelokasjon 
  // and the operation the user have selected) 
  // so we use  useReducer() 
  const [{ currentMinnelokasjon, previousMinnelokasjon, operation }, dispatch] = useReducer(
    reducer,
      {}
    )

  return (
    <div className="container-grid">
      {/* the output inside of our calculator */}
      <div className='output'>
        <div className="previous-minnelokasjon">{previousMinnelokasjon} {operation}</div>
        <div className="current-minnelokasjon">{currentMinnelokasjon}</div>
      </div>
       {/* buttons inside of our css grid  */}
       <button className="spantwo">AC</button>
       <button>DEL</button>
       <DigitButton digit="÷" dispatch={dispatch} />
       <DigitButton digit={1} dispatch={dispatch} />
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
