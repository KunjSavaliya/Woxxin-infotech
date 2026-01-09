import React from "react";
import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";

const Button = ({
  text,
  onClick,
  onButtonClick,
  className = "",
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onButtonClick || onClick}
      disabled={disabled}
      className={`
        group relative overflow-hidden
        inline-flex items-center gap-3
        px-5 py-3
        rounded-xl
        border border-[#5961F9]
        text-white
        font-light
        shadow-md
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {/* BG exit */}
      <span className="absolute inset-0 bg-transparent transition-transform duration-500 group-hover:-translate-x-full" />

      {/* BG enter */}
      <span className="absolute inset-0 bg-[#5961F9] translate-x-full transition-transform duration-500 group-hover:translate-x-0" />

      {/* Text */}
      <span className="relative z-10">{text}</span>

      {/* Arrow container */}
      <span className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
        <FaArrowRight className="text-white transition-transform duration-300 group-hover:translate-x-[150%]" />
      </span>

      {/* Arrow re-enter */}
      <FaArrowRight
        className="
          absolute right-[22px]
          text-white
          opacity-0
          -translate-x-[150%]
          transition-all duration-500
          group-hover:opacity-100
          group-hover:translate-x-0
          z-10
        "
      />
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onClick: PropTypes.func,
  onButtonClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
