// app/component/Model.tsx
"use client"

import { useGLTF } from "@react-three/drei";

export default function Model({ position }: { position: [number, number, number] }) {
  const { scene } = useGLTF("/sabrina.glb");  // public/ 底下的路徑
  
  return <primitive object={scene} position={position} />;
}

// 預載模型（效能優化）
useGLTF.preload("/sabrina.glb");