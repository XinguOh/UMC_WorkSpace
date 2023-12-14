import React from 'react';
const MoviePop = ({props}) => {
    return (
        <div className="movie-pop">
            <div className="pop-title">{props.title}</div>
            <div className="pop-description">{props.overview}</div>
        </div>
    );
};

export default MoviePop;