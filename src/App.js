import React, {useState} from 'react';
import Item from './components/Item';
import Folder from './components/Folder';
let counterItem = 1
let counterFolder = 1

function App() {
  let [item, setItems] = useState([])
  let [folder, setFolders] = useState([])

  function addItem() {
    let preset = {id: counterItem, title: '', content: ''}
    let title = document.getElementById('titleItemAdd')
    let content = document.getElementById('contentAdd')
    preset.title = title.value
    preset.content = content.value

    setItems(item => [...item, preset])
    counterItem++;
  }

  function addFolder() {
    let preset = {id: counterFolder, title: ''}
    let title = document.getElementById('titleFolderAdd')
    preset.title = title.value

    setFolders(folder => [...folder, preset])
    counterFolder++;
  }

  return (
    <div>
      <div className='Controller'>
        <h2>todo list?</h2>
        <strong>Add item  </strong>
        <input id='titleItemAdd' placeholder='Title' type='text'></input>
        <input id='contentAdd' placeholder='Content' type='text'></input>
        <button onClick={addItem}>Add</button><br></br>
        {/*
        <strong>Add folder  </strong>
        <input id='titleFolderAdd' placeholder='Title' type='text'></input>
        <button onClick={addFolder}>Add</button><br></br>
        */}
      </div>
      
      {[folder.map(folder =>
        <Folder folder={folder} key={folder.id}/>
      )]}
      {[item.map(item =>
        <Item item={item} key={item.id}/>
      )]}
    </div>
  );
}

export default App;
