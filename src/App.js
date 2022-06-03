import React, { useState } from 'react';
import Modal from './Modal/Modal';

export default function App() {
  const [show, setShow] = useState(false)

  return (
    <div className="App">
      <button className='init-btn' 
        onClick={ ()=> setShow(true) }>Show</button>
      <Modal 
        title="Modal"
        content="Content goes here"
        onClose={()=> setShow(false)} 
        show={show} />
    </div>
  );
}
