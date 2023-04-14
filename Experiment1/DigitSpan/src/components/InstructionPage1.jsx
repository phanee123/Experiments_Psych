import React from 'react';
import { useHistory } from 'react-router-dom';

function Instruction1() {
  const history = useHistory();

  function handleNext() {
    history.push('/next-page');
  }

  return (
    <div>
      <h2>Instruction 1</h2>
      <p>This is instruction 1.</p>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}


export default Instruction1;