import React from 'react';

const Login = ({ handleSubmit}) => {
  
    return (
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
    );
};

export default Login;