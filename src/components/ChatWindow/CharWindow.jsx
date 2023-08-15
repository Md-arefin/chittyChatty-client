import React from 'react';
import img from '../../assets/rsz_11rsz_1rsz_1rsz_11luffy.png'

const CharWindow = ({ userName }) => {
    return (
        <div>
            <div className='flex items-center justify-center gap-5 mt-5'>
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={img} />
                    </div>
                </div>

                <div className='text-xl lg:text-5xl text-center Caprasimo'>Logged in as <span className='text-2xl lg:text-7xl font-bold'>{userName}</span>
                </div>

            </div>


            <div>

            </div>

        </div>
    );
};

export default CharWindow;