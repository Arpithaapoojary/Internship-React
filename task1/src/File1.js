import React from "react";
import { useNavigate } from "react-router-dom";

function File1() {
  const navigate = useNavigate();
  return (
    <div>
      File1
      <button onClick={() => navigate("/demo2")}>navigate</button>
    </div>
  );
}

export default File1;
