import React from "react";
import { Link, IndexLink } from "react-router";

const Nav = () => {
  const onSearch = (e) => {
    e.preventDefault();
    alert('not wired')
  }
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            React Weather App
          </li>
          <li>
            <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
          </li>
          <li>
            <Link to="/about" activeClassName="active">About</Link>
          </li>
          <li>
            <Link to="/examples" activeClassName="active">Examples</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-rigt">
        <form onSubmit={onSearch}>
          <ul className="menu">
            <li>
              <input type="search" placeholder="Search Weather"/>
            </li>
            <li>
              <input type="submit" className="button" value="Get Weather"/>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export {Nav}
