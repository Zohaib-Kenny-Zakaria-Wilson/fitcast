import React from 'react';
import PropTypes from 'prop-types';

function Button({ onClick, children }) {
  return (
    <button className="px-4 py-2 rounded-md bg-neutral-200 box-border text-neutral-800 border-b-2 border-neutral-400 hover:border-b-0 ">
        {children}
    </button>
  );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;