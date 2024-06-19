import React from "react";
import PropTypes from "prop-types";

function Button({ children }) {
  return (
    <button className="box-border px-4 py-2 rounded-md bg-primary-tw text-background ">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
