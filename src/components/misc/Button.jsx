import React from "react";
import PropTypes from "prop-types";

function Button({ children }) {
  return (
    <button className="py-1 px-4 min-h-full text-sm md:text-base dark:bg-dark-foreground dark:text-dark-primary-tw dark:border-dark-component-border bg-component-border rounded-sm text-primary-tw border-b-2 hover:translate-y-0.5 hover:border-b-2 hover:dark:border-transparent hover:border-transparent transition-all duration-100">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
