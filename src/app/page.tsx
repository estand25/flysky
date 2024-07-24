'use client'

import { useRouter } from "next/navigation"
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";

export default function Home () {
  const router = useRouter();
  const [x, setX] = useState(10);
  const [y, setY] = useState(10);
  const [rotate, setRotate] = useState(10);

  return (
     <Canvas>
      <div className="w-full h-screen">
        
        <div className="w-36 h-36 border-2 border-sky-300 rounded-md m-5"></div>
      </div>

     </Canvas>
  )
}


const Banner = () => {
  const ref = useRef()
  
}