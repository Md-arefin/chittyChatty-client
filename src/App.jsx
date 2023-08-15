import { FaBeer } from 'react-icons/fa';
// socket.io
import { io } from 'socket.io-client';
import './App.css';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useState } from 'react';

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
      <div className={userName? 'hidden' : 'block'}>
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
      {userName ? <div className='text-2xl lg:text-7xl text-center Caprasimo mt-10'>Logged in as ${userName}</div> :
        <div className=" w-1/2 mx-auto min-h-screen my-10">
          <div className="hero-content ">
            <div className="card w-full shadow-2xl bg-slate-500">
              <form onSubmit={handleSubmit} className="card-body w-full">
                <div className="form-control">
                  <label className="label ">
                    <span className="label-text text-3xl font-bold text-black ">User name</span>
                  </label>
                  <input type="text" name='userName' placeholder="Enter user name..." className="input input-bordered mt-3 text-2xl" required />
                </div>

                <div className="form-control mt-6">
                  <input type="submit" value="Join!" className="w-1/2 mx-auto btn bg-black text-2xl" />
                </div>
              </form>
            </div>
          </div>
        </div>
      }

    </>
  )
}

export default App
