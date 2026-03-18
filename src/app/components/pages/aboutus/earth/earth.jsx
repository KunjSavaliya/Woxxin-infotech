"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useMemo } from "react";

// Convert lat/lng to 3D position
function latLngToVector3(lat, lng, radius = 2) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);

    return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
    );
}

// Fake country coordinates (you can replace with real data)
const locations = [
    { lat: 20.5937, lng: 78.9629 }, // India
    { lat: 37.7749, lng: -122.4194 }, // USA
    { lat: 51.5074, lng: -0.1278 }, // UK
    { lat: 35.6762, lng: 139.6503 }, // Japan
    { lat: -33.8688, lng: 151.2093 }, // Australia
];

function Earth() {
    const meshRef = useRef();

    // Points positions
    const points = useMemo(() => {
        const pts = locations.map((loc) =>
            latLngToVector3(loc.lat, loc.lng, 2.05)
        );
        return new Float32Array(pts.flatMap((p) => [p.x, p.y, p.z]));
    }, []);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.002;
        }
    });

    return (
        <group ref={meshRef}>
            {/* Earth Sphere */}
            <Sphere args={[2, 64, 64]}>
                <meshStandardMaterial
                    color="#0a0a23"
                    emissive="#112244"
                    roughness={0.8}
                />
            </Sphere>

            {/* Glow Effect */}
            <Sphere args={[2.2, 64, 64]}>
                <meshBasicMaterial
                    color="#3b82f6"
                    transparent
                    opacity={0.15}
                />
            </Sphere>

            {/* Points */}
            <Points positions={points} stride={3}>
                <PointMaterial
                    color="#38bdf8"
                    size={0.05}
                    sizeAttenuation
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

export default function Globe() {
    return (
        <div className="w-full h-[500px]">
            <Canvas camera={{ position: [0, 0, 6] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} />

                <Earth />
            </Canvas>
        </div>
    );
}