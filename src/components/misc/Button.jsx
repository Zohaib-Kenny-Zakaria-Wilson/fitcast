import React from "react";
import PropTypes from "prop-types";

function Button({ children }) {
  return (
    <button className="px-4 py-2 rounded text-primary-tw dark:text-dark-primary-tw bg-component-border dark:bg-dark-component-border">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
