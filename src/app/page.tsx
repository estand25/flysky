'use client'

import { useRouter } from "next/navigation"
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home () {
  const router = useRouter();
  const [x, setX] = useState(10);
  const [y, setY] = useState(10);
  const [rotate, setRotate] = useState(10);

  // return (
  //   <button type="button" onClick={() => router.push('/landing')}>
  //     Landing
  //   </button>
  // )
  return
  (
    <div>
      <motion.div
        animate={{x, y, rotate}}
        transition={{ type: "spring" }}
      />
    </div>
  )
}