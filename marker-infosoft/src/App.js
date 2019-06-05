import React from 'react';
import './App.css';
import MainMap from './Map/Map';
import CreateMarkerInput from './CreateMarkerInput/CreateMarkerInput';
import MarkerTable from './MarkerTable/MarkerTable';

function App() {
  return (
    <>
      <CreateMarkerInput/>
      <MarkerTable/>
      <MainMap/>
    </>
  );
}


export default App;
