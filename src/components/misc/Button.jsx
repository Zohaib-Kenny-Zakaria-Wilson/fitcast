import React from "react";
import PropTypes from "prop-types";

function Button({ children }) {
  return (
    <button className="py-1 px-4 bg-component-border rounded-sm text-primary-tw border-b-2 hover:translate-y-0.5 hover:border-b-2 hover:border-transparent transition-all duration-100">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
