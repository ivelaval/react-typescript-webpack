import React, { useState } from 'react';

export const InputElement = () => {
  const [inputText, setInputText] = useState('');

  return (
    <div>
      <input onChange={(e) => { setInputText(e.target.value) }} placeholder="Enter something" /> <br/>
      entered text: {inputText}
    </div>
  );
}
