import React from 'react';
//import { useHistory } from 'react-router-dom';

function Instruction2() {
  //const history = useHistory();

  function handleNext() {
    history.push('/next-page');
  }

  return (
    <div className="instruction-container">
      <h2>Instruction 2</h2>
      <p>This is instruction 2.</p>
      
    </div>
  );
}

  
  export default Instruction2;