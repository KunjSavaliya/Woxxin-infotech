"use client";
import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [visible, setVisible] = useState(true);
  const [enabled, setEnabled] = useState(true);
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });

  // ✅ Disable cursor on mobile & tablet
  useEffect(() => {
    const checkDevice = () => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      const isSmallScreen = window.innerWidth <= 1024;
      setEnabled(!(isTouch || isSmallScreen));
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target;
      const tag = target.tagName?.toLowerCase();

      const isReactIcon =
        tag === "svg" ||
        tag === "path" ||
        target.closest("svg") ||
        target.classList?.toString().includes("react-icons") ||
        target.getAttribute("data-icon");

      const isInteractive =
        ["a", "button", "input", "textarea", "select"].includes(tag) ||
        target.getAttribute("role")?.match(/button|link/) ||
        target.classList.contains("cursor-pointer") ||
        isReactIcon;

      if (isInteractive) {
        setScale(2);
        setVisible(false);
      } else {
        setScale(1);
        setVisible(true);
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, [enabled]);

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
          transform: `translate3d(${pos.x - 4}px, ${
            pos.y - 4
          }px, 0) scale(${scale})`,
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
            backdropFilter: "blur(6px)",
            background: "rgba(89,97,249,0.08)",
          }}
        />
      </div>
    </>
  );
}
