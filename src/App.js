import './App.css';
import { useEffect, useState } from 'react'
import Cell  from './components/Cell'

function App() {

  const [ cells , setCells ] = useState(Array(9).fill(null));
  const [ player , setPlayer ] = useState(true);
  const [ winner , setWinner ] = useState(null);
  const [indexes, setIndexes] = useState([]);

  useEffect( () => {
    checkWinner();
  }, [winner,cells] );

  const handleClick = (index) => {
    if(cells[index] || winner) return;
    let temp = cells;
    temp[index] = player ? "X" : "O";
    setCells([...temp]);
    setPlayer(!player);
  }

  const winningPositions = [
    [ 0 , 1 , 2 ],
    [ 3 , 4 , 5 ],
    [ 6 , 7 , 8 ],
    [ 0 , 3 , 6 ],
    [ 1 , 4 , 7 ],
    [ 2 , 5 , 8 ],
    [ 0 , 4 , 8 ],
    [ 2 , 4 , 6 ],
];

  const checkWinner = () => {
    winningPositions.map( position => {
      let [ a , b , c ] = position;
      if( cells[a] && cells[a] === cells[b] && cells[b] === cells[c] ){
        setWinner(cells[a]);
        setIndexes([a,b,c]);
      }
      let empty = cells.filter(a => !a);
      if(empty.length === 0 && !winner){
        setWinner("No");
      }
    } )
  }

  const resetGame = () => {
    setCells(Array(9).fill(null));
    setWinner(null);
    setPlayer(true);
    setIndexes([]);
  }

  return (
    <>
      {
        winner ? <h1 className="title">Winner is {winner}</h1> : <h1 className="title">Tic Tac Toe</h1>
      }
      <div className="game">
      {
        cells.map( ( a , b ) => (
          <Cell key={b} value={a} click={handleClick} index={b} arr={indexes} />
        ) )
      }
    </div>
    <button className='btn' onClick={resetGame}>Reset</button>
    </>
  );
}

export default App;
