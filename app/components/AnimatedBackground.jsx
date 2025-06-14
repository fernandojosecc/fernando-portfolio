'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

// 1. Create shader material
const GradientMaterial = shaderMaterial(
  { uTime: 0 },
  // Vertex Shader
  `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `,
  // Fragment Shader
  `
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    float pulse = 0.5 + 0.5 * sin(uTime + vUv.x * 10.0);
    vec3 color = mix(vec3(0.2, 0.1, 0.5), vec3(0.8, 0.3, 0.9), pulse);
    gl_FragColor = vec4(color, 1.0);
  }
  `
);

// 2. Register it with a name (PascalCase)
extend({ GradientMaterial });

function ShaderPlane() {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.uTime = clock.getElapsedTime();
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <gradientMaterial ref={ref} attach="material" />
    </mesh>
  );
}

// 3. Fullscreen animated background
export default function AnimatedBackground() {
  return (
    <Canvas className="fixed inset-0 -z-10" camera={{ position: [0, 0, 1] }}>
      <ShaderPlane />
    </Canvas>
  );
}
