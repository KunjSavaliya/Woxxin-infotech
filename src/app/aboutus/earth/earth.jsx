"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useEffect, useState, useMemo } from "react";

/* =========================
   🌍 GLOBE DOTS
========================= */
function GlobePoints() {
    const ref = useRef();
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        const img = new Image();
        img.src = "/HomePages/AboutUs/earth.jpg";

        img.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            canvas.width = img.width;
            canvas.height = img.height;

            ctx.drawImage(img, 0, 0);

            const imageData = ctx.getImageData(
                0,
                0,
                canvas.width,
                canvas.height
            );

            const dots = [];
            const radius = 2.5;
            const step = 12;

            for (let y = 0; y < canvas.height; y += step) {
                for (let x = 0; x < canvas.width; x += step) {
                    const index = (y * canvas.width + x) * 4;
                    const r = imageData.data[index];

                    if (r < 80) {
                        const lat = (y / canvas.height) * 180 - 90;
                        const lng = (x / canvas.width) * 360 - 180;

                        const phi = (90 - lat) * (Math.PI / 180);
                        const theta = (lng + 180) * (Math.PI / 180);

                        const px = -radius * Math.sin(phi) * Math.cos(theta);
                        const py = radius * Math.cos(phi);
                        const pz = radius * Math.sin(phi) * Math.sin(theta);

                        dots.push(px, py, pz);
                    }
                }
            }

            setPositions(new Float32Array(dots));
        };
    }, []);

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.0015;
        }
    });

    if (!positions.length) return null;

    return (
        <Points ref={ref} positions={positions} stride={3}>
            <PointMaterial
                size={0.025}
                color="#FFFFFF"
                transparent
                opacity={0.9}
                sizeAttenuation
                depthWrite={false}
                depthTest={false}
            />
        </Points>
    );
}

/* =========================
   ⭐ BACKGROUND DOTS
========================= */
function SpaceDots() {
    const positions = useMemo(() => {
        const arr = [];
        for (let i = 0; i < 1500; i++) {
            const spread = 20;
            arr.push(
                (Math.random() - 0.5) * spread,
                (Math.random() - 0.5) * spread,
                (Math.random() - 0.5) * spread
            );
        }
        return new Float32Array(arr);
    }, []);

    return (
        <Points positions={positions} stride={3}>
            <PointMaterial
                size={0.01}
                color="#9ca3af"
                transparent
                opacity={0.4}
                depthWrite={false}
            />
        </Points>
    );
}

/* =========================
   🌍 EARTH BASE
========================= */
function EarthBase() {
    return (
        <mesh>
            <sphereGeometry args={[2.45, 64, 64]} />
            <meshPhysicalMaterial
                color="#ffffff"
                transparent
                opacity={0.08}
                transmission={1}
                roughness={0.3}
                metalness={0}
            />
        </mesh>
    );
}

/* =========================
   🌍 MAIN COMPONENT
========================= */
export default function Globe() {
    return (
        <div className="w-full h-[500px] md:h-[1200px] relative overflow-hidden ">

            {/* 🌑 Glow Background */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[500px] h-[500px] rounded-fullblur-3xl opacity-20"></div>
            </div>

            {/* ✨ CENTER TEXT */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <p className="text-center text-white text-[18px] md:text-[22px] lg:text-[36px] leading-relaxed max-w-[600px] font-medium text-glow">
                    Empowering millions to live, work,<br />
                    and play better on a journey<br />
                    to reach a billion.
                </p>
            </div>

            {/* 🎥 CANVAS */}
            <Canvas camera={{ position: [0, 0, 6] }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[2, 2, 2]} intensity={0.4} />

                <SpaceDots />
                <EarthBase />
                <GlobePoints />
            </Canvas>
        </div>
    );
}