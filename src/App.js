import './App.css';
import React, {useState} from 'react';

function App() {
  const [value, setValue] = useState('');

  const handleChange = (e)=>{
    const buttonValue = e.target.value;
    
    if (buttonValue === 'AC') {
      setValue('');
    } 
    else if (buttonValue === 'DE') {
      setValue(value.slice(0, -1));
    } 
    else if (buttonValue === '=') {
      try {
        setValue(eval(value).toString());
      } catch {
        setValue('Error');
      }
    } 
    else {
      setValue(value + buttonValue);
    }
  }

  return (
    <div className='container'>
      <div className='calculator'>
          <form action=''>
            <div className='display'>
            <input type="text" value={value} />
            </div>
            <div>
              <input type="button" value="AC" onClick={handleChange} />
              <input type="button" value="DE" onClick={handleChange} />
              <input type="button" value="%" onClick={handleChange} />
              <input type="button" value="/" onClick={handleChange} />
            </div>
            <div>
              <input type="button" value="7" onClick={handleChange} />
              <input type="button" value="8" onClick={handleChange} />
              <input type="button" value="9" onClick={handleChange} />
              <input type="button" value="*" onClick={handleChange} />
            </div>
            <div>
              <input type="button" value="4" onClick={handleChange} />
              <input type="button" value="5" onClick={handleChange} />
              <input type="button" value="6" onClick={handleChange} />
              <input type="button" value="-" onClick={handleChange} />
            </div>
            <div>
              <input type="button" value="1" onClick={handleChange} />
              <input type="button" value="2" onClick={handleChange} />
              <input type="button" value="3" onClick={handleChange} />
              <input type="button" value="+" onClick={handleChange} />
            </div>
            <div>
              <input type="button" value="00" onClick={handleChange} />
              <input type="button" value="0" onClick={handleChange} />
              <input type="button" value="." onClick={handleChange} />
              <input type="button" value="=" onClick={handleChange} />
            </div>
          </form>
      </div>
    </div>
  );
}

export default App;
