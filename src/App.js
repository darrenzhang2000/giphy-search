import React from 'react';
import './App.css';
import SearchField from './Components/SearchField';
/*
http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=YOUR_API_KEY
sqPHtsBm3ol63E2X1iIJRktBKkzxe4qZ
http://api.giphy.com/v1/gifs/search?q=cats&api_key=sqPHtsBm3ol63E2X1iIJRktBKkzxe4qZ
*/


function App() {  
  return (
    <div className="App">
      <p>Hello</p>
      <SearchField/>
    </div>
  );
}

export default App;


