import React from 'react';
import Search from './components/search';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
// import logo from './logo.svg';
import './App.css';

function App():JSX.Element {
  return (
    <>
    <Search />
    <SearchBar />
    <div className="wrapper">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
    </>
  );
}

export default App;
