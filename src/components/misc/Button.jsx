import React from "react";
import PropTypes from "prop-types";

function Button({ children }) {
  return (
    <button className="box-border px-4 py-2 border-b-2 rounded-md bg-neutral-200 text-neutral-800 border-neutral-400 hover:border-b-0 ">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
