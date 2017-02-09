import React from "react";
import { Link, IndexLink } from "react-router";

const Nave = () => {
  return (
    <div>
      <h2>Nav Component</h2>
      <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
      <Link to="/about" activeClassName="active">About</Link>
      <Link to="/examples" activeClassName="active">Examples</Link>
    </div>
  );
}

export {Nav}
