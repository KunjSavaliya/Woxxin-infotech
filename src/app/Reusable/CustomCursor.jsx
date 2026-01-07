'use client';
import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [visible, setVisible] = useState(true);
    const [enabled, setEnabled] = useState(true);
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });


  useEffect(() => {
    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      const tag = e.target.tagName?.toLowerCase();
      const isInteractive = ['a', 'button', 'input', 'span', 'textarea', 'select'].includes(tag)
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

   useEffect(() => {
    if (!enabled) return;

    let raf;
    const follow = () => {
      setRingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.15,
        y: prev.y + (pos.y - prev.y) * 0.15,
      }));
      raf = requestAnimationFrame(follow);
    };
    follow();
    return () => cancelAnimationFrame(raf);
  }, [pos, enabled]);

  if (!enabled || !visible) return null;
  return (
   
     <>
      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          transform: `translate3d(${pos.x - 4}px, ${pos.y - 4}px, 0)`,
        }}
      >
        <div className="w-2 h-2 rounded-full bg-[#5961F9]" />
      </div>

      {/* Outer Ring */}
      <div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          transform: `translate3d(${ringPos.x - 20}px, ${ringPos.y - 20}px, 0)`,
        }}
      >
        <div
          className="w-10 h-10 rounded-full border border-[#5961F9]/50"
          style={{
            backdropFilter: 'blur(6px)',
            background: 'rgba(89,97,249,0.08)',
          }}
        />
      </div>
    </>
  );
}
