"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const AnimatedStars = () => {
  const pointsRef = useRef();

  // 生成 1000 个更小的圆形光点
  const particles = useMemo(() => {
    const positions = new Float32Array(500 * 3);
    const colors = new Float32Array(500 * 3);
    const colorOptions = [
      new THREE.Color("#FF4500"), // 橙
      new THREE.Color("#FF1493"), // 粉
      new THREE.Color("#00FF7F"), // 绿
      new THREE.Color("#1E90FF"), // 蓝
      new THREE.Color("#FFD700"), // 金
      new THREE.Color("#8A2BE2"), // 紫
    ];

    for (let i = 0; i < 500; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12; // X 轴范围更大
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12; // Y 轴范围更大
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5; // Z 轴靠近用户

      // 随机给每个光点分配颜色
      const color =
        colorOptions[Math.floor(Math.random() * colorOptions.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return { positions, colors };
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005; // 让光点缓慢旋转
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={particles.positions}
          count={particles.positions.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={particles.colors}
          count={particles.colors.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03} // 让光点更小
        sizeAttenuation
        vertexColors
        depthWrite={false}
        transparent
        opacity={0.7} // 让光点更柔和
      />
    </points>
  );
};

const Background = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
    >
      <AnimatedStars />
    </Canvas>
  );
};

export default Background;
