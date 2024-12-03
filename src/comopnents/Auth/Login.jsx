import React, { useState } from "react";


function Login({handlelogin}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Summitform = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    handlelogin(email,password)
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="border-2 border-emerald-600 rounded-xl p-20">
        <form
          className="flex flex-col items-center justify-center "
          onSubmit={Summitform}
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-emerald-600 py-3 px-4 outline-none  bg-transparent text-xl  rounded-full"
            type="email"
            placeholder="Enter your email"
            required
          />
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
            className="border-2 border-emerald-600 py-3 px-4 outline-none bg-transparent  text-xl mt-4  rounded-full"
            required
          />
          <button className="border-2 w-[200px] mt-5 border-none bg-emerald-800 py-3 px-4 outline-none  text-xl  rounded-full cursor-pointer">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
