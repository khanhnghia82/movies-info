import React from "react";
import { Link } from "react-scroll";
import { randomRgbaColor } from "../../utils";

function MenuItem(props) {
  const { to, name, Icon } = props;
  return (
    <Link
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="subMenu"
    >
      <Icon className="icon" style={{color: randomRgbaColor(1)}}/>
      <span> {name} </span>
    </Link>
  );
}

export default MenuItem;
