import React from "react";

function File5() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // localStorage.setItem("name", name);
    // console.log(name);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <form>
        <input type="text" name="name" onChange={handleChange} />
        {/* <label>Email</label>
        <input type="email" />
        <label>Password</label>
        <input type="password" /> */}
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default File5;
