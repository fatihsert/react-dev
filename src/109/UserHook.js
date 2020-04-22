import React, { useState,useEffect } from "react";

const UserHook = () => {
  // Declare a new state variable, which we'll call "count"
  const [username, setUsername] = useState("fatih");
  const [surname, setSurname] = useState("sert");

  const handleUsernameChange = (e) => {setUsername(e.target.value);};
  const handleSurnameChange = (e) => {setSurname(e.target.value);};

  useEffect(() => {
    console.log("useEffect")
  }, []);
  return (
    <div>
      <h3>hello hook</h3>
      <hr></hr>
      <div>UserName:{username}</div>
      <div>UserName:{surname}</div>
      surname<input type="text" onChange={handleUsernameChange}></input>
      surnanme<input type="text" onChange={handleSurnameChange}></input>
    </div>
  );
};

export default UserHook;
