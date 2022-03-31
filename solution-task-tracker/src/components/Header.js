import React from 'react'
import Button from './Button'

const Header = ({title}) => {
    const handleClick=()=>{
        console.log("click with handle from");
    }
  return (
    <div className='header' >
        <h1>{title}</h1>
        <Button
        handleClick={handleClick}
        color ="purple"
        text = "Show Add Task Bar"
        />
    </div>
  );
};
// Header.defaultProps ={
//     title:"task tarcker"
// };

//title ="task default" const headerin içine yazılır

export default Header;