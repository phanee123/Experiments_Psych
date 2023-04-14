import React from 'react';
//import { useHistory } from 'react-router-dom';

function Instruction5() {
  //const history = useHistory();

  function handleNext() {
    history.push('/next-page');
  }

  return (
    <div>
      <h2>Instruction 5</h2>
      <p>This is instruction 5.</p>
      
    </div>
  );
}


  export default Instruction5;