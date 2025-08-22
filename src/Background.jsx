import { extend, useThree, useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import React, { Suspense, useRef, useMemo, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { useCursor, MeshPortalMaterial, OrthographicCamera, Gltf, Text, Preload, Sky, Svg, shaderMaterial } from '@react-three/drei'
import { useRoute, useLocation } from 'wouter'
import { Water } from "three/examples/jsm/objects/Water.js";
import { suspend } from 'suspend-react'
import { easing, geometry } from 'maath'
import { Grid, TextField, Button } from '@mui/material'
import { Description } from "@mui/icons-material";

extend({ Water });
extend(geometry)

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

const GradientMaterial = shaderMaterial(
  {
    uTime: 0,
    // Neon-inspired vibrant colors
    color1: new THREE.Color('#ff005e'), // hot pink
    color2: new THREE.Color('#00ff2aff'), // cyan
    color3: new THREE.Color('#fffd00')  // bright yellow
  },
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
    uniform vec3 color1;
    uniform vec3 color2;
    uniform vec3 color3;
    varying vec2 vUv;

    void main() {
      float wave = sin(vUv.y * 5.0 + uTime * 0.5) * 0.5 + 0.5;
      vec3 topGradient = mix(color1, color2, vUv.y);
      vec3 finalColor = mix(topGradient, color3, wave * 0.5);
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
)

extend({ GradientMaterial })

function GradientBackground() {
  const matRef = useRef()
  useFrame(({ clock }) => {
    matRef.current.uTime = clock.getElapsedTime()
  })
  return (
    <mesh position={[0, 0, -3]}>
      <planeGeometry args={[10, 10]} />
      <gradientMaterial ref={matRef} />
    </mesh>
  )
}

function Frame({ id, name, author, bg, width = 1, height = 1.3, children, ...props }) {
  const portal = useRef()
  const [, setLocation] = useLocation()
  const [, params] = useRoute('/item/:id')
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  useFrame((state, dt) => easing.damp(portal.current, 'blend', params?.id === id ? 1 : 0, 0.2, dt))
  return (
    <group {...props}>
      <Text color={'black'} fontSize={0.15} anchorY="top" anchorX="left" lineHeight={0.8} position={[-0.375, 0.315, 0.01]} material-toneMapped={false}>
        {name}
      </Text>
      <Text color={'black'} fontSize={0.1} anchorX="right" position={[0.4, -0.359, 0.01]} material-toneMapped={false}>
        /{id}
      </Text>
      <Text color={'black'} fontSize={0.04} anchorX="right" position={[0.0, -0.677, 0.01]} material-toneMapped={false}>
        {author}
      </Text>

      <mesh name={id} onClick={(e) => { if (id !== '03') { props.setFramesActive(false) } }} onPointerOver={(e) => hover(true)} onPointerOut={() => hover(false)}>
        <roundedPlaneGeometry args={[hovered ? width + 0.2 : width, hovered ? height + 0.2 : height, 0.1]} />
        <meshStandardMaterial color="#373737" metalness={0.5} roughness={0.5} envMapIntensity={2} />
        <MeshPortalMaterial ref={portal} events={params?.id === id} side={THREE.DoubleSide}>
          <GradientBackground />
          {children}
        </MeshPortalMaterial>
      </mesh>
      <mesh name={id} position={[0, 0, -0.01]}>
        <roundedPlaneGeometry args={[hovered ? width + 0.2 + 0.1 : width + 0.1, hovered ? height + 0.2 + 0.1 : height + 0.1, 0.1]} />
        <meshStandardMaterial color="#373737" metalness={0.5} roughness={0.5} envMapIntensity={2} />
        <MeshPortalMaterial ref={portal} events={params?.id === id} side={THREE.DoubleSide}>
          <color attach="background" args={['#373737']} />
          {children}
        </MeshPortalMaterial>
      </mesh>
    </group>
  )
}

export default function Background({ tab, setTab }) {
  const [framesActive, setFramesActive] = useState(true);
  const cameraRef = useRef();
  const objectRef = useRef();

  let fileName = "src\\resume.pdf";
  useEffect(() => {
    if (tab == 0) {
      setFramesActive(true);
    }
  }, [tab]);

  return (
    <div style={{ height: '100%', width: '100vw' }}>
      <Canvas camera={{ ref: { cameraRef }, position: [0, 5, 100], fov: 75, near: 1, far: 200, }} style={{ width: '100vw', height: '100%' }}>
        <pointLight decay={0} position={[100, 100, 100]} />
        <pointLight decay={0.5} position={[-100, -100, -100]} />
        {framesActive ? <>
          <Frame id="01" name={`Experience`} bg="grey" position={[-3, 5, 96]} rotation={[0, 0.6, 0]} framesActive={framesActive} setFramesActive={setFramesActive} onClick={() => { setTab(1) }} />
          <Frame id="02" name={`Projects`} bg="grey" position={[-1, 5, 95]} rotation={[0, 0.3, 0]} framesActive={framesActive} setFramesActive={setFramesActive} onClick={() => { setTab(2) }} />
          <Frame id="03" name={`Resume`} bg="grey" position={[1, 5, 95]} rotation={[0, -0.3, 0]} framesActive={framesActive} setFramesActive={setFramesActive} onClick={() => { window.open(fileName) }} />
          <Frame id="04" name={`Contact`} bg="grey" position={[3, 5, 96]} rotation={[0, -0.6, 0]} framesActive={framesActive} setFramesActive={setFramesActive} onClick={() => { setTab(4) }} /></> : <></>
        }
        <Ocean />
        <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0.01} />
      </Canvas>
    </div>
  )
}