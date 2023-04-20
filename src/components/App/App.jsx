import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const elements = useSelector(store => store.elementList)
  const [newElement, setNewElement] = useState('');

  useEffect(() => {
    // * Step 9: dispatch to trigger action from root saga
    dispatch({ type: 'FETCH_ELEMENTS' });
  }, []);

  const addElement = () => {
    dispatch({ 
      type: 'ADD_ELEMENT', 
      payload: { name: newElement } ,
      // Kinda like passing a prop through our saga (line 44 in index.js)
      setNewElement: setNewElement
    });
  }

  return (
    <div>
      <h1>Atomic Elements</h1>

      <ul>
        {elements.map(element => (
          <li key={element}>
            {element}
          </li>
        ))}
      </ul>

      <input 
        value={newElement} 
        onChange={evt => setNewElement(evt.target.value)} 
      />
      <button onClick={addElement}>Add Element</button>
    </div>
  );
}

export default App;
