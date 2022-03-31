import React from 'react'

const Button = ({color, text, handleClick}) => {
    // const handleClick=()=>{
    //     console.log("click with handle from");
    // }
  return (
    <div>
        <button className='btn' style={{backgroundColor:color}} onClick={handleClick} >
            {text}
        </button>
    </div>
  );
};

export default Button;