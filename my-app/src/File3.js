import React from "react";
import File1 from "./File1";
import File2 from "./File2";

function File3() {
  let arr = ["A", "B", "C"];
  //   const File3 = false;
  //   if (File3) {
  //     return <File1 />;
  //   }
  //   return <File2/>;
  // }

  //   return <div>{File3 ? <File1 /> : <File2 />}</div>;

  // return(

  <div>
      {arr.map((item)=>(
          <h1 key={item}>{item}</h1>
      ))}
  </div>

  // );
}
export default File3;
