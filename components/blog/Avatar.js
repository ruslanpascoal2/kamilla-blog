import React from "react";

export const Avatar = ({size}) => {
    if(!size) size = '30px';
    return (
        <div style={{...avatarStyle, height: size, width: size}} className="m-1 mr-2 border-dark border-1 relative flex justify-center items-center rounded-full bg-light j2-500 text-xl text-white uppercase" ></div>
    )
}

export const avatarStyle  = {
    backgroundImage: `url('/avatar-squared.jfif')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
}
