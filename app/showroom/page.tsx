"use client"

import { Canvas } from "@react-three/fiber"
import { Box, Environment, OrbitControls, RoundedBox } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Tree from "@/app/component/tree";
import Sabrina from "@/app/component/sabrina";
export default function Showroom() {
  //3D 模型預覽說明瀏覽器

  return (
    <>
      <Canvas style={{ width: "100%", height: "100vh" }}>

        <Environment preset="forest" background={true} backgroundBlurriness={0} />
        <OrbitControls autoRotate={true} />

        {/* <Box position={[-2, 0, 0]}>
          <meshStandardMaterial color="red" />
        </Box> */}

        <Tree position={[-2, 0.01, 0]}/>
        <Tree position={[3, 0.01, 0]}/>
        <Tree position={[2, 0.01, 0]}/>
        <Sabrina position={[0, 0.045, 0]} />
        
        {/* <RoundedBox position={[0,0,0]} args={[20,0.1,20]} radius={0.05}>
          <meshStandardMaterial color="gray" />
        </RoundedBox> */}

        <EffectComposer>
          <Bloom intensity={2.0} />
        </EffectComposer>

        {/* <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 1]} intensity={1} color="white" /> */}

      </Canvas>
    </>
  );
}
