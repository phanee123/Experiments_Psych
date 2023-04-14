import React from 'react';
import { Link } from 'react-router-dom';

function Instruction1() {
  return (
    <div>
      <h2>Instruction 1</h2>
      <p>This is instruction 1.</p>
      <Link to="/instructions2">Next</Link>
    </div>
  );
}

function Instruction2() {
  return (
    <div>
      <h2>Instruction 2</h2>
      <p>This is instruction 2.</p>
      <Link to="/instructions3">Next</Link>
    </div>
  );
}

function Instruction3() {
  return (
    <div>
      <h2>Instruction 3</h2>
      <p>This is instruction 3.</p>
      <Link to="/instructions4">Next</Link>
    </div>
  );
}

function Instruction4() {
  return (
    <div>
      <h2>Instruction 4</h2>
      <p>This is instruction 4.</p>
      <Link to="/instructions5">Next</Link>
    </div>
  );
}

function Instruction5() {
  return (
    <div>
      <h2>Instruction 5</h2>
      <p>This is instruction 5.</p>
    </div>
  );
}



export { Instruction1, Instruction2, Instruction3, Instruction4, Instruction5 };
