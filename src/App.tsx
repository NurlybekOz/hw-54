import { useState } from 'react'
import './App.css'
import FlexCells from "./components/Field/Field.tsx";
import ResetButton from "./components/Reset/Reset.tsx";


const App = () => {
    const [count, setCount] = useState<number>(0);
    const [cells, setCells] = useState(() => {
        const CellsBox = [];
        for (let i = 1; i <= 36; i++) {
            CellsBox.push({hasItems: false, clicked: false});
        }
        const randomIndex = Math.floor(Math.random() * CellsBox.length);
        CellsBox[randomIndex].hasItems = true;
        return CellsBox;
    });
    const [gameOver, setGameOver] = useState<boolean>(false);
   const deleteCell = (index: number) => {
       if (gameOver) return;
       const newCells = [...cells];
       newCells[index].clicked = true;
       if (newCells[index].hasItems) {
           alert("Элемент найден!");
           setGameOver(true);
       }
       setCells(newCells);
       setCount((prevState) => prevState + 1);
   }
    const resetGame = () => {
        const newCells = [];
        for (let i = 1; i <= 36; i++) {
            newCells.push({ hasItems: false, clicked: false });
        }
        const randomIndex = Math.floor(Math.random() * newCells.length);
        newCells[randomIndex].hasItems = true;
        setCells(newCells);
        setCount(0)
        setGameOver(false)
    };
  return (
    <>
      <div>
          <FlexCells cells={cells} onCellClick={deleteCell}/>
      </div>
            Tries: {count}
        <br/>
          <ResetButton onReset={resetGame}/>
   </>
  )
};

export default App
