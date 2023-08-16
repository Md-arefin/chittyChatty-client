import React from 'react';
import img from '../../assets/rsz_11rsz_1rsz_1rsz_11luffy.png';
import { BsSendFill } from 'react-icons/bs';
// import ChatBody from '../ChatBody/ChatBody';

const CharWindow = ({ user, message, messages, handleMessage }) => {
    return (
        <div className='relative mt-10 border-2 border-white rounded-md mx-5 md:mx-20 lg:mx-40'>
            <div className='flex items-center sticky-top justify-start gap-5 border-b-[1px] border-white mx-auto'>
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={img} />
                    </div>
                </div>

                <div className='text-xl lg:text-5xl text-center Caprasimo'>Logged in as <span className='text-2xl lg:text-7xl font-bold'>{user.username}</span>
                </div>
            </div>


            {/* <ChatBody messages={messages}></ChatBody> */}
            <div className='h-[60vh] overflow-auto relative text-center mt-5'>
                {
                    messages.map((message, i) => {
                        return message.type === "UserStatus" ? (
                            <div key={i} className='my-2 py-1'>
                                <span className='badge bg-neutral-600 text-white px-5  rounded text-lg py-3'> 
                                    {message.userId === user.userId ? "You have joined!" : `${message.username} has Joined!`}
                                </span>
                            </div>
                        ) : ''
                    })
                }
            </div>


            <form onSubmit={handleMessage} className='p-5 flex flex-col md:flex-row items-center'>
                <div className="form-control flex-1">
                    <input type="text" name='textMessage' placeholder="Type your message..." className="input input-bordered md:rounded-r-none text-xl" required />
                </div>
                <div className=" btn bg-black text-xl md:rounded-l-none mt-5 md:mt-0">
                    <input type="submit"
                        value="Send" />
                    <BsSendFill />
                </div>
            </form>

        </div>
    );
};

export default CharWindow;