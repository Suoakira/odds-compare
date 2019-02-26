import React from 'react';


const Score = (props) => {
    return ( 
        <div className="background-score">
            <div className="div-sizeofcontents">{props.home} </div> 

            <div className="div-sizeofcontents">{props.away}</div>
        </div>

     );
}
 
export default Score;