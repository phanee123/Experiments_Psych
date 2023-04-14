import React, { useState } from 'react';
import Instruction1 from './components/Instruction1';
import Instruction2 from './components/Instruction2';
import Instruction3 from './components/Instruction3';
import Instruction4 from './components/Instruction4';
import Instruction5 from './components/Instruction5';
import buttons from './components/numpad';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  function handleNextPage() {
    setCurrentPage(currentPage + 1 );
  }

  return (
    <div>
      {currentPage === 1 && <Instruction1 />}
      {currentPage === 2 && <Instruction2 />}
      {currentPage === 3 && <Instruction3 />}
      {currentPage === 4 && <Instruction4 />}
      {currentPage === 5 && <Instruction5 />}
      {currentPage > 5 && <NumberPad />}
      {currentPage <= 5 && <button onClick={handleNextPage}>Next</button>}
    </div>
  );
}

  export default App;