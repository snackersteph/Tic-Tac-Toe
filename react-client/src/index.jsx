import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/Board.jsx';
import Square from './components/Square.jsx';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById('game'));
