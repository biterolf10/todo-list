import React, { useState } from 'react';
import Item from './components/Item';

let counterItem = 1;

function App() {
  const [items, setItems] = useState([]);

  function addCounter() {
    const numbered = document.getElementById('numberedText').checked;
    if (numbered === true) {
      counterItem += 1;
    } else {
      counterItem = 1;
    }
  }

  function addItem() {
    const content = document.getElementById('contentAdd').value;
    const numbered = document.getElementById('numberedText').checked;
    const bigger = document.getElementById('biggerText').checked;

    const newItem = {
      id: counterItem,
      content: content,
      bigger: bigger,
      numbered: numbered
    };

    setItems(prevItems => [...prevItems, newItem]);
    addCounter();
  }

  return (
    <div>
      <div className='Controller'>
        <h2>Todo List</h2>
        <label>Add item  </label>
        <input id='contentAdd' placeholder='Content' type='text'/><br/>
        <label htmlFor="biggerText">Bold text</label>
        <input id="biggerText" type='checkbox'/><br/>
        <label htmlFor="numberedText">Numbered</label>
        <input id="numberedText" type='checkbox'/><br/><br/>
        <button onClick={addItem}>Add</button><br/><br/>
      </div>

      <div id="itemsHandler">
        {items.map(item => (
          <Item item={item} key={item.id} />
        ))}
      </div>
      
    </div>
  );
}

export default App;