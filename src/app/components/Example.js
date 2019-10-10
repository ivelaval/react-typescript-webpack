import React, { useState } from 'react';

export const InputElement = () => {
  const [inputText, setInputText] = useState('');
  const [historyList, setHistoryList] = useState([]);

  return (
    <div>
      <input onChange={(e) => {
        setInputText(e.target.value);
        setHistoryList([...historyList, e.target.value])
      }} placeholder="Enter something" /> <br/>
      entered text: {inputText}
      <hr/>
      <ul>
        {historyList.slice(historyList.length-5).map((history) => {
          return <li>{history}</li>;
        })}
      </ul>
    </div>
  );
}
