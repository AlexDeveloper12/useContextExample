import React, { useState, createContext } from 'react';
import Child1 from './Child1';

export const NameContext = React.createContext();

function App({ name }) {

  return (
    <div>
      <NameContext.Provider value={name}>
        <Child1 />
      </NameContext.Provider>

    </div>
  )

};

App.defaultProps = {
  name: 'gregg'
}

export default App;