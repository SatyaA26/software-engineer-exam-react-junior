import React, { useState } from 'react';

const New = ({ Text }) => {
    // 'useState' to manage the state of the 'text' variable
    const [text, setText] = useState(Text); 
    
    // 'handleClick' that updates the 'text' state to 'world'
    const handleClick = () => {             
        setText('world');
    };   

    //'span' element with an 'onClick' event that triggers 'handleClick'
    return <span onClick={handleClick}>{text}</span>; 
};

export default New;
