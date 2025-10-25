import React from "react";
import { Link } from "react-router-dom";

function Data1() {
  return (
    <div>
      <li>
        <Link to="/file1">File1</Link>
      </li>

      <li>
        <Link to="/file2">File2</Link>
      </li>

      <li>
        <Link to="/file3">File3</Link>
      </li>
    </div>
  );
}

export default Data1;
