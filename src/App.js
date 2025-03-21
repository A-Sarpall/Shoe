import { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useGLTF } from '@react-three/drei'
import { proxy, useSnapshot } from 'valtio'

const state = proxy({
  items: {
    mesh: '#0000ff',
    sole: '#ffff00',
    stripes: '#000000',
    band: '#ffffff',
    caps: '#ffffff',
    patch: '#ffffff',
    inner: '#ffffff',
    laces: '#ffffff'
  }
})

function Shoe(props) {
  const { nodes, materials } = useGLTF('shoe.glb')
  const snap = useSnapshot(state)
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.shoe.geometry} material-color={snap.items.mesh} material={materials.mesh} />
      <mesh geometry={nodes.shoe_1.geometry} material-color={snap.items.sole} material={materials.sole} />
      <mesh geometry={nodes.shoe_2.geometry} material-color={snap.items.stripes} material={materials.stripes} />
      <mesh geometry={nodes.shoe_3.geometry} material-color={snap.items.band} material={materials.band} />
      <mesh geometry={nodes.shoe_4.geometry} material-color={snap.items.caps} material={materials.caps} />
      <mesh geometry={nodes.shoe_5.geometry} material-color={snap.items.patch} material={materials.patch} />
      <mesh geometry={nodes.shoe_6.geometry} material-color={snap.items.inner} material={materials.inner} />
      <mesh geometry={nodes.shoe_7.geometry} material-color={snap.items.laces} material={materials.laces} />
    </group>
  )
}

export default function App() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <Suspense fallback={null}>
        <Shoe />
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}
