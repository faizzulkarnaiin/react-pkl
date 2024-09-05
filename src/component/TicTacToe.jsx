import { useState } from "react";


function Square({ value, onSquareClick }) {
  // const [value, setValue] = useState("");
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onplay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onplay(nextSquares);
  }
  function handleClear() {}

  const winner = calculateWinner(squares);
  let status = "";
  if (winner) {
    status = "Winner :  " + winner;
  } else {
    status = "Next Player :  " + (xIsNext ? "X" : "O");
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className="board">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <button onClick={handleClear} className="btn">
        Clear
      </button>
    </>
  );
}

function calculateWinner(squares) {
  let lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [2, 5, 8],
    [1, 4, 7],
    [0, 3, 6],
    [0, 4, 8],
    [2, 4, 6],
  ];  

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return false;
}

export default function Game() {
  let [currentMove, setCurrentMove] = useState(0);
  let [xIsNext, setXIsnext] = useState(true);
  let [history, setHistory] = useState([Array(9).fill(null)]);
  let currentHistory = history[currentMove];

  function jumpTo(nextMove){
    setCurrentMove(nextMove);
    setXIsnext(nextMove % 2 === 0);
  }

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsnext(!xIsNext);
  }
  const moves = history.map((i, n) => {
    let description = "";
    if (n > 0) {
      description = "Go To Move #" + n;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={n}>
        <button onClick={() => jumpTo(n)}>{description}</button>
      </li>
    );
  });
  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board
            xIsNext={xIsNext}
            squares={currentHistory}
            onplay={handlePlay}
          />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  );
}
