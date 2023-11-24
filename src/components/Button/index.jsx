import React from 'react';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './style.scss';

const Button = ({ buttonName = "button", addDescription = "", children, callbackFunction = () => {}}) => {
  const [ isClicked, setIsClicked ] = useState(false);

  
  useEffect(() => {
    if (isClicked) {

      Swal.fire({
        title: buttonName,
        text: `${buttonName} が謳歌されました！${addDescription}`,
        icon: 'info',
      });
      
    }
  }, [isClicked, buttonName, addDescription]);


  const clickFunction = async () => {
    await setIsClicked(true);
    callbackFunction();
  };

  return (
    <button disabled={isClicked} className={isClicked ? 'buttonStyle clickedButtonStyle noHoverEffect' : 'buttonStyle'} onClick={clickFunction}>
      {children}
    </button>
  );
};

export default Button;
