import React from 'react'

const Counter = ({Inc,Dec,children})=> 
{
  return (
    <div>
        <button data-testid="btn" onClick={Inc||Dec}>
            {children}
        </button>
    </div>
  )
}

export default Counter