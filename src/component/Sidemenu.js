import React from "react";
import "./Sidemenu.css";

function Sidemenu({ Icon, menuname }) {
  return (
    <div className='sidemenu__con' >
      <Icon />
      <h2>{menuname}</h2>
    </div>
  );
}

export default Sidemenu;
