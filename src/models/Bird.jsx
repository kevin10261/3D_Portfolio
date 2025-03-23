import {useRef, useEffect} from 'react'
import {useAnimations,useGLTF} from '@react-three/drei'
import {useFrame} from '@react-three/fiber'

import birdScene from '../assets/3d/bird.glb'

const Bird = () => {
    
    const birdref = useRef()

    const {scene, animations} = useGLTF(birdScene)

    const {actions} = useAnimations(animations, birdref)

    useEffect(() => {
        actions['Take 001'].play()
    }, [])

    useFrame(({ clock, camera }) => {
        // Update the Y position to simulate bird-like motion using a sine wave
        birdref.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;
    
        // Check if the bird reached a certain endpoint relative to the camera
        if (birdref.current.position.x > camera.position.x + 10) {
          // Change direction to backward and rotate the bird 180 degrees on the y-axis
          birdref.current.rotation.y = Math.PI;
        } else if (birdref.current.position.x < camera.position.x - 10) {
          // Change direction to forward and reset the bird's rotation
          birdref.current.rotation.y = 0;
        }
    
        // Update the X and Z positions based on the direction
        if (birdref.current.rotation.y === 0) {
          // Moving forward
          birdref.current.position.x += 0.01;
          birdref.current.position.z -= 0.01;
        } else {
          // Moving backward
          birdref.current.position.x -= 0.01;
          birdref.current.position.z += 0.01;
        }
      });

  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdref}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Bird