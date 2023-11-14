import { Canvas, useFrame, useThree} from '@react-three/fiber'
import React from 'react'
import { Gallery } from './Gallery'
import { OrbitControls } from '@react-three/drei'

export default function Main3D() {
    const MyMesh = React.useRef()

    // useFrame(({ clock }) => {
    //   const a = clock.getElapsedTime();
    //   MyMesh.current.rotation.x = a;
    //   MyMesh.current.rotation.x = -a;

    // });

    return (
        <Canvas>
            {/* <Suspense fallback={null} /> */}
            <ambientLight intensity={1} />
            <directionalLight position={[3, 3, 90]} intensity={1} />
            <hemisphereLight intensity={1} />
            {/* Animation */}
            <OrbitControls
                maxDistance={7}
                minDistance={4}
                // Vertical Orbit
                minAzimuthAngle={-Math.PI / 3}
                maxAzimuthAngle={Math.PI / 3}
                minPolarAngle={0.9}
                maxPolarAngle={2.25}
            />
            <mesh ref={MyMesh} >
                <Gallery />
            </mesh>
        </Canvas>
    )
}
