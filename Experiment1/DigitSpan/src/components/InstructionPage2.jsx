import React from 'react';
import { useHistory } from 'react-router-dom';

function Instruction2() {
  const history = useHistory();

  function handleNext() {
    history.push('/next-page');
  }

  return (
    <div>
      <h2>Instruction 2</h2>
      <p>This is instruction 2.</p>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

  
  export default Instruction2;