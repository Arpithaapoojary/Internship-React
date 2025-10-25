import React from 'react'

function File4() {

    let arr=["Aa","Bb","Cc"]
  return (
    <div>
        
        {arr.map((item)=>(
            <h1 key={item}>{item}</h1>
        ))};
    </div>
  )
}

export default File4