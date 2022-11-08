import { ACTIONS } from '../App';

import React from 'react'

const DigitButton = ({ dispatch, digit }) => {
  return (
    // We have a button witch has this digit
    // and it has an onClick which is calling the ADD_DIGIT function
    // and it is passing along the digit we want to add
    <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit }})}>
        { digit }
    </button>
  )
}

export default DigitButton
