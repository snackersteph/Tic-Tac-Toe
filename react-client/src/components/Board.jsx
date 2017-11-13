import React from 'react';
import ReactDOM from 'react-dom';

import Square from './Square.jsx';

class Board extends React.Component {

  render() {
    return (
      <div>
        <div>
          <Square />
          <Square />
          <Square />
        </div>      
        <div>
          <Square />
          <Square />
          <Square />
        </div>      
        <div>
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    );
  }
}

export default Board;