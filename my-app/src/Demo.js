import React from "react";

function Demo() {
  const handleClick = (x) => {
    alert(x);
  };

  // const handleClick=()=>
  // {
  //   alert("button clicked")
  // }
  // let x=5;
  // let text="GM";
  // if(x<10)
  //     {
  //         text="Goodmorning";
  //     }

  return (
    <div>
      Demo
      <button onClick={() => handleClick("Click")}>Click</button>
    </div>
  );
}

export default Demo;
