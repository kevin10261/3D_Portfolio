import { useRef, useEffect } from 'react'

import dragonScene from '../assets/3d/dragon.glb'
import {useAnimations, useGLTF} from '@react-three/drei'

const Dragon = ({isRotating,...props}) => {
    const ref = useRef()
    const {scene, animations} = useGLTF(dragonScene)
    const{ actions } = useAnimations(animations, ref)

    useEffect(() => {
        if(isRotating){
            actions['Take 001'].play()
        }else{
            actions['Take 001'].stop()
        }
    },[actions, isRotating])

  return (
    <mesh position={[0,-4,3]} scale={[1,1,1]} {...props} ref= {ref}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Dragon