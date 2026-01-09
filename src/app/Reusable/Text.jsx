import React from "react";
import PropTypes from "prop-types";

const Text = ({
  children,
  size = "",
  color = "text-[#373435]",
  className = "",
  font = "",
}) => {
  return (
    <p className={`${className} ${size} ${color} text-center ${font} `}>
      {children}
    </p>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  font: PropTypes.string,
  className: PropTypes.string,
};

export default Text;
