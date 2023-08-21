import React, { useState } from 'react';

function AButton() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  function changeButtonState() {
    setIsSubmitted(true);
    console.log('clicked');
  }

  return (
    <button onClick={changeButtonState}>
      { isSubmitted ? '…' : 'Submit' }
    </button>
  );
}

export default AButton;