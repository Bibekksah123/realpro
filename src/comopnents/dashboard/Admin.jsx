import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import Alltask from "../others/Alltask";
function Admin({setUser}) {
  return (
    <div className="h-screen w-full p-10">
      <Header setUser={setUser} />
     <CreateTask/>
     <Alltask/>
    </div>
  );
}

export default Admin;
