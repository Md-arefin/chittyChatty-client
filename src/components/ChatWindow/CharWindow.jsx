import React from 'react';

const CharWindow = ({ userName }) => {
    return (
        <div>
            <div className='text-xl lg:text-5xl text-center Caprasimo mt-10'>Logged in as <span className='text-2xl lg:text-7xl font-bold'>{userName}</span>
            </div>
        </div>
    );
};

export default CharWindow;