import { useCallback, useEffect, useState } from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Login from './components/LogIn/Login';
import './App.css';
import CharWindow from './components/ChatWindow/CharWindow';

// socket.io
import { io } from 'socket.io-client';

// const socket = io('https://chittychatty-server.onrender.com');
const socket = io('http://localhost:5000');

function App() {

  const [newUser, setNewUser] = useState('');
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    socket.on("users", (users) => {
      const messagesArr = users.map(({ userId, username }) => ({
        type: "UserStatus",
        userId,
        username
      }));
      setMessages([...messages, ...messagesArr])
      setUsers(users);
    });

    socket.on("session", ({ userId, username }) => {
      setUser({ userId, username });
    });

    socket.on("user connected", ({ userId, username }) => {
      const newMessage = { type: "UserStatus", userId, username };
      setMessages(prevMessages => [...prevMessages, newMessage]);
    });

    socket.on("new message", ({ userId, username, message }) => {
      const newMessage = {
        type: "message",
        userId: userId,
        username: username,
        message
      };
      setMessages(prevMessages => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off("users");
      socket.off("session");
      socket.off("user connected");
      socket.off("new message");
    };
  }, [messages]);

  
  // login
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const userName = form.userName.value;
    console.log(userName);
    setNewUser(userName);

    // setUser
    setUser(newUser);
    // socket
    socket.auth = { username: newUser };
    socket.connect();
  }

  // message 
  const handleMessage = useCallback (event => {
    event.preventDefault();
    const form = event.target;
    const textMessage = form.textMessage.value;
    // console.log(textMessage);
    setMessage(textMessage);

    socket.emit("new message", textMessage, () => {
      // After the message is sent successfully, update the state
      const newMessage = {
        type: "message",
        userId: user.userId,
        username: user.username,
        message: textMessage
      };
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setMessage('');
    });

  }, [socket, user]);
  return (
    <>
      <div className={user.userId ? 'hidden' : 'block'}>
        <div>
          <Player
            autoplay
            loop
            src="https://lottie.host/aacf9ba2-bc1c-4ae8-b6b5-d5772d78ac16/K47dHc1US0.json"
            style={{ height: '300px', width: '300px' }}
          >
            <Controls visible={!true} buttons={['play', 'repeat', 'frame', 'debug']} />
          </Player>
        </div>

        <h1 className='text-2xl lg:text-7xl text-center Caprasimo mt-10'>Welcome to our ChitChat</h1>
      </div>

      {/* -------Form-------- */}

      {
        user.userId ? <CharWindow
          user={user}
          message={message}
          messages={messages}
          handleMessage={handleMessage}
        />
          : <Login
            handleSubmit={handleSubmit}
          />
      }

    </>
  )
}

export default App
