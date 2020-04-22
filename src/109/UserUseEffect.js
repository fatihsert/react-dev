import React, { useState, useEffect } from 'react';

function UserUseEffect() {
  const [count, setCount] = useState(0);
  const [name, setUserName] = useState("");

  
  useEffect(() => {
    console.log("3");

    // Update the document title using the browser API
    document.title = name;
  });



  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    console.log("1");

    document.title = `You clicked ${count} times`;

    return function clean()
    {
        console.log("useEffect 1 clean")
    }

  });



  useEffect(() => {
      console.log("2");
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
      
    <div>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <button onClick={() => setUserName("deneme")}>
        Click me tanme
      </button>
    </div>
  );
}

export default UserUseEffect;