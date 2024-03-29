/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/newitem.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0,-2,-0.01]} rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.01} rotation={[Math.PI / 2, 0, 0]}>
          <group scale={1}>
            <mesh geometry={nodes.Layer_0.geometry} material={nodes.Layer_0.material} />
            <mesh geometry={nodes.Layer_0_1.geometry} material={nodes.Layer_0_1.material} />
            <mesh geometry={nodes.Layer_0_2.geometry} material={nodes.Layer_0_2.material} />
            <mesh geometry={nodes.Layer_0_3.geometry} material={nodes.Layer_0_3.material} />
            <mesh geometry={nodes.Object001.geometry} material={nodes.Object001.material} />
            <mesh geometry={nodes.Object002.geometry} material={nodes.Object002.material} />
            <mesh geometry={nodes.Object003.geometry} material={nodes.Object003.material} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/newitem.gltf')
