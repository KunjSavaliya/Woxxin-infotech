'use client';
import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      const tag = e.target.tagName?.toLowerCase();
      const isInteractive = ['a', 'button', 'input', 'textarea', 'select'].includes(tag)
        || e.target.getAttribute('role')?.match(/button|link/)
        || e.target.classList.contains('cursor-pointer');

      if (isInteractive) {
        setScale(2);                // Expand cursor
        setVisible(false);          // Hide after expand
      } else {
        setScale(1);
        setVisible(true);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    return () => document.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-50 pointer-events-none transition-opacity duration-150 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}
      style={{
        transform: `translate3d(${pos.x - 16}px, ${pos.y - 16}px, 0)`,
      }}
    >
      <div
        className="rounded-full bg-[#7A7AFB]/20 backdrop-blur-sm"
        style={{
          width: `${32 * scale}px`,
          height: `${32 * scale}px`,
          transition: 'width 0.1s ease, height 0.1s ease, opacity 0.1s ease',
        }}
      />
    </div>
  );
}
