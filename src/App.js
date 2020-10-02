import React from 'react';
import {Provider} from 'react-redux';
import BookContainer from './Componants/booksContainer'
import HookBookContainer from './Componants/HookBookContainer'
import './App.css';
import Store from './redux/store';

function App() {
  return (
    <Provider store ={Store} >
    <div className = "App">
      <BookContainer />
      <HookBookContainer />
    </div>
   </Provider>
   
  );
}

export default App;
