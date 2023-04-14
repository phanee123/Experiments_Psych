import React from 'react';
//import { useHistory } from 'react-router-dom';

function Instruction3() {
  //const history = useHistory();

  function handleNext() {
    history.push('/next-page');
  }

  return (
    <div>
      <h2>Instruction 3</h2>
      <p>This is instruction 3.</p>
      
    </div>
  );
}


  export default Instruction3;