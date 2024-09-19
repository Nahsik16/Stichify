/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10} // Fixed typo from 'scae' to 'scale'
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight 
        amount={4}
        radius={9}
        intensity={0.5} // Increased light intensity
        ambient={0.7} // Increased ambient light
        position={[5, 5, -10]}
      />
      <RandomizedLight 
        amount={4}
        radius={5}
        intensity={0.9} // Increased light intensity
        ambient={0.75} // Increased ambient light
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  )
}

export default Backdrop