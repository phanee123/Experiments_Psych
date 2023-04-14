import React from 'react';
//import { useHistory } from 'react-router-dom';

function Instruction4() {
  //const history = useHistory();

  function handleNext() {
    history.push('/next-page');
  }

  return (
    <div className="instruction-container">
      <h2>Instruction 4</h2>
      <p>This is instruction 4.</p>
    </div>
  );
}


  export default Instruction4;