import { useState } from 'react';
import { ReactDOM } from 'react';
import {Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import layout from './assets/components/layout';
import bookcard from './assets/components/bookcard';
import SearchResults from './assets/components/searchresults';

function App() {
  

  return (
    <div>
      <layout>
        <SearchResults/>
      </layout>
    </div>
     
  )
}

export default App;
