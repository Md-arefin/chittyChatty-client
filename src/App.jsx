import { FaBeer } from 'react-icons/fa';
// socket.io
import { io } from 'socket.io-client';
import './App.css';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useState } from 'react';
import Login from './components/LogIn/Login';
import CharWindow from './components/ChatWindow/CharWindow';

function App() {

  const [userName, setUserName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const userName = form.userName.value;

    setUserName(userName);
  }

  return (
    <>
      <div className={userName ? 'hidden' : 'block'}>
        <div>
          <Player
            autoplay
            loop
            src="https://lottie.host/615840d2-e7ec-4093-9a2f-19c103614a02/8G8ZWN8QRD.json"
            style={{ height: '300px', width: '300px' }}
          >
            <Controls visible={!true} buttons={['play', 'repeat', 'frame', 'debug']} />
          </Player>
        </div>

        <h1 className='text-2xl lg:text-7xl text-center Caprasimo mt-10'>Welcome to our ChitChat</h1>
      </div>

      {/* -------Form-------- */}

      {userName ? <CharWindow userName={userName}/> : <Login handleSubmit={handleSubmit}/>
      
      }

    </>
  )
}

export default App
