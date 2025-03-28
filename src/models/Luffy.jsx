/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: nitwit.friends (https://sketchfab.com/nitwit.friends)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/monkey-d-luffy-3d9fb8bd86854aa69ee6f69fcbeaca51
Title: Monkey D. Luffy
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

import scene from '../assets/3d/luffy.glb'


const Luffy=({currentAnimation, ...props}) =>{
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(scene)
  const { actions } = useAnimations(animations, group)
  
  
  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop())

    if(actions[currentAnimation]) {
      actions[currentAnimation].play()
    }
  }, [actions, currentAnimation])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.015}>
          <group name="fbx_mergefbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.LuffyD}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.lambert4}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <group name="Object_6" position={[0, 90.213, -3.534]} />
                  <group name="Luffy">
                    <group name="21_teeth_1_0_0" position={[0, 90.213, -3.534]} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}


export default Luffy
