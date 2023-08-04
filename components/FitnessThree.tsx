'use client'
import * as THREE from "three"
import {Canvas, useFrame} from '@react-three/fiber'
import React, { useRef,Suspense,useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import {Lighting} from './Lighting'


export function FitnessThree(props:any)
{

    // const [invest20Pos, updateInvest20Pos] = useState([-5, 0,0]) 
    // //
    // useFrame(()=>
    // {



    // })

    const canvasRef = useRef<HTMLCanvasElement>(null);

    

    return (
            <Canvas ref={canvasRef} className={props.className}  shadows={true}  camera={{ zoom: 1, position: [0, 0, 5] }}>
              
              <ambientLight color="lightblue"intensity={0.1}></ambientLight>
                {/* <pointLight intensity={1} color="#cc00cc"position={[10, 10, -3]} /> */}
                {/* <pointLight intensity={1} color="#cc00cc"position={[10, 10, 5]} /> */}
                {/* <Save50 scale={1.2} rotation={[0,-Math.PI/2,Math.PI/2]} position={[-10, 10, 5]}/> */}
                {/* <pointLight intensity={1} color="lightblue" position={[7.5, -20, 20]} /> */}
                {/* <pointLight intensity={0.5} color="cc00cc" position={[10, 0, 10]} /> */}
                <Lighting/>
                <Suspense fallback={null}>

                  {/* <Model scale={9} pos={[0,-8,-5]} rotation={[0,Math.PI/2,0]} />
                    */}
                </Suspense>
            </Canvas>
    )
}