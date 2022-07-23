import React from 'react'

const Cell = ({ value , click , index ,arr }) => {
  return (
    <div style={{ 
      background: arr.includes(index) ? "green" : "white" , 
      color: arr.includes(index) ? "white" : "black" ,
      fontSize: arr.includes(index) ? "50px" : "30px" 
      }} className='cell' onClick={ () => click(index)}>
        {value}
    </div>
  )
}

export default Cell