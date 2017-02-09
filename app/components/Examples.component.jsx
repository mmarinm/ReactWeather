import React from "react";
import { Link } from "react-router";

const Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are few example locations to try out</p>
      <ol>
        <li>
          <Link to='/?location=NewYork'>New York, NY</Link>
        </li>
        <li>
          <Link to='/?location=Split'>Split, Cro</Link>
        </li>
      </ol>
    </div>
  );
};

export {Examples}
