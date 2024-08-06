import React from 'react'

function GameBox({ cells, myfunc }) {
    return (
        <div className='container'>
            <div className='gamebox'>
                {cells.map((cell, index) => {
                    return <button className='cell' key={index} onClick={() => myfunc(index)} disabled={cell}>{cell}</button>
                })}
            </div>
        </div>
    )
}
export default GameBox