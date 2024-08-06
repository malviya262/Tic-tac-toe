import React from 'react'
import { useState } from 'react'
import GameBox from './GameBox'

function Main() {

    const [cells, setCells] = useState(Array(9).fill(null));
    const [turnX, setTurnX] = useState(true);
    const [message, setMessage] = useState('');

    const winpattern = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const showwinner = (win) => {
        if (win === 'draw') {
            setMessage('Match Draw');
        }
        else {
            setMessage(`Player ${win} wins`);
        }
       
    };


    var myfunc = (index) => {

        if (cells[index] || message) {
            return;
        }
        let newcells = [...cells];

        if (turnX) {
            newcells[index] = 'X';
        }
        else {
            newcells[index] = 'O';
        }
        setCells(newcells);
        setTurnX(!turnX);
        checkwinner(newcells);
    };

    const checkwinner = (cells) => {

        for (let pattern of winpattern) {
            const [winpos1, winpos2, winpos3] = pattern;

            const pos1 = cells[winpos1] ?? '';
            const pos2 = cells[winpos2] ?? '';
            const pos3 = cells[winpos3] ?? '';
            
            if (pos1 === pos2 && pos2 === pos3 && pos1 !== '') {
                if (pos1 === pos2 && pos2 === pos3) { 
                    showwinner(pos1);
                    return;
                }
            }
        }

        if (cells.every(cell => cell)) {
            showwinner('draw');
        }
    };

    const resetgame = () => {
        setCells(Array(9).fill(null));
        setTurnX(true);
        setMessage('');
    };

    return (
        <main>
            <div className='myclass'>
                <h1>Tic-Tac-Toe Game in React JS</h1>
                <button className='reset' onClick={resetgame}> Reset</button>
            </div>
            <GameBox cells={cells} myfunc={myfunc} />
            <div className='msgbox'>
                {message && <p id='msg'>{message}</p>}
            </div>
        </main>
    )
}
export default Main