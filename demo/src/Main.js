import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <li>
        <Link to="/File1">File1</Link>
      </li>
      <li>
        <Link to="/File2">File2</Link>
      </li>
    </div>
  );
}

export default Main;
