import React from 'react';

const ChatBody = ({ messages }) => {
    return (
        <div>
            <div className='min-h-screen overflow-auto'>
                {
                    messages.map((message, i) => {
                        return message.type === "UserStatus" ? (
                            <div key={i} className=''>
                                <span className='badge-secondary'> 
                                    {message.userId === user.userId ? "You have joined!" : `${message.username} has Joined!`}
                                </span>
                            </div>
                        ) : ''
                    })
                }
            </div>
        </div>
    );
};

export default ChatBody;