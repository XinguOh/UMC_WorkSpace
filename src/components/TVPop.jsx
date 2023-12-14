import React from 'react';
const TVPop = ({props}) => {
    return (
        <div className="movie-pop">
            <div className="pop-title">{props.name}</div>
            <div className="pop-description">{props.overview}</div>
        </div>
    );
};

export default TVPop;