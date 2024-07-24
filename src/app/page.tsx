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
      <div className="w-full h-screen flex-row">
        <div className=" m-16">
          <Cloud/>
        </div>
        <div className=" m-16">
          <Cloud/>
        </div>
        <div className=" m-16">
          <Cloud/>
        </div>
      </div>

  )
}


const Cloud = () => {
  return (
    <div className="relative w-48 h-16 bg-white rounded-full shadow-md">
      <div className="absolute w-24 h-24 bg-white rounded-full shadow-md -top-7 left-12"></div>
      <div className="absolute w-24 h-24 bg-white rounded-full shadow-md -top-10 left-20"></div>
      <div className="absolute w-24 h-24 bg-white rounded-full shadow-md -top-7 right-12"></div>
      <div className="absolute w-24 h-24 bg-white rounded-full shadow-md -top-5 right-5"></div>
    </div>
  );
};