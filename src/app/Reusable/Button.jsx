import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';

const hoverStyles = {
  scale: 'hover:scale-105 hover:shadow-lg transition-transform duration-200',
  underline: 'border-b-2 border-transparent hover:border-white transition-all duration-300',
  glow: 'hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.4)] transition duration-300',
  gradient: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition-all duration-300',
  slide: 'relative overflow-hidden bg-blue-600 hover:bg-blue-700 transition-all duration-300',
  fade: 'bg-indigo-600 hover:bg-indigo-500 transition-opacity duration-300',
  rotate: 'hover:rotate-1 hover:scale-105 transition-transform duration-300',
  zoomIcon: '', // Special handling in JSX
  borderGlow: 'border border-transparent hover:border-white hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.3)] transition-all duration-300',
  glass: 'bg-white/10 backdrop-blur-md hover:bg-white/20 transition duration-300',

  // NEW: Animated border on hover
  borderAnimate: `
    relative border border-white text-white
    before:content-[''] before:absolute before:inset-0 before:rounded before:border-2
    before:border-[#00FFA3] before:scale-0 before:transition-transform
    before:duration-300 group-hover:before:scale-100 group-hover:before:opacity-100
    overflow-hidden z-10
  `,
};

const Button = ({
  text,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  iconColor = 'white',
  variant = 'scale',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group inline-flex items-center justify-center gap-2 px-4 py-2 rounded text-white ${hoverStyles[variant]} ${className}`}
    >
      {typeof text === 'string' ? (
        <>
          {text}
          <FaArrowRight
            className={`transform transition-all duration-300 ${
              variant === 'zoomIcon'
                ? 'group-hover:scale-125 group-hover:translate-x-2'
                : 'group-hover:translate-x-2 group-hover:rotate-12'
            }`}
            color={iconColor}
          />
        </>
      ) : (
        text
      )}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  iconColor: PropTypes.string,
  variant: PropTypes.oneOf([
    'scale',
    'underline',
    'glow',
    'gradient',
    'slide',
    'fade',
    'rotate',
    'zoomIcon',
    'borderGlow',
    'glass',
    'borderAnimate',
  ]),
};

export default Button;
