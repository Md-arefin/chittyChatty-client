import React from 'react';
import img from '../../assets/rsz_11rsz_1rsz_1rsz_11luffy.png'

const CharWindow = ({ userName }) => {
    return (
        <div className='relative mt-5 border-2 border-white rounded-md mx-10 md:mx-20 lg:mx-40'>
            <div className='flex items-center sticky-top justify-start gap-5 border-b-[1px] border-white mx-auto'>
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={img} />
                    </div>
                </div>

                <div className='text-xl lg:text-5xl text-center Caprasimo'>Logged in as <span className='text-2xl lg:text-7xl font-bold'>{userName}</span>
                </div>
            </div>


            <div className='p-5'>
               

            </div>

        </div>
    );
};

export default CharWindow;