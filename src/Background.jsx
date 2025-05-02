import { extend, useThree, useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import React, { Suspense, useRef, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sky } from '@react-three/drei'

import { Water } from "three/examples/jsm/objects/Water.js";

extend({ Water });

function Ocean() {
  const ref = useRef();
  const gl = useThree((state) => state.gl);
  const waterNormals = useLoader(
    THREE.TextureLoader, "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/waternormals.jpg"
  );


  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = useMemo(() => new THREE.PlaneGeometry(30000, 30000), []);
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xeb8934,
      waterColor: 0x0064b5,
      distortionScale: 40,
      fog: false,
      format: gl.encoding,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [waterNormals]
  );
  useFrame(
    (state, delta) => (ref.current.material.uniforms.time.value += delta)
  );
  return (
    <water
      ref={ref}
      args={[geom, config]}
      rotation-x={-Math.PI / 2}
      position={[0, 0, 0]}
    />
  );
}

export default function Background() {
return(
    <div style={{height:'100vh', width:'100vw'}}>
<Canvas camera={{ position: [0, 5, 100], fov: 55, near: 1, far: 20000 }}>
<pointLight decay={0} position={[100, 100, 100]} />
<pointLight decay={0.5} position={[-100, -100, -100]} />
  <Ocean />
<Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0.1} />
</Canvas>
</div>
)
}