'use client'

import { useRouter } from "next/navigation"
import { motion } from "framer-motion";
import { FunctionComponent, HTMLAttributes, useRef, useState } from "react";
import { cx } from "class-variance-authority";

export default function Home () {
  const router = useRouter();
  const [x, setX] = useState(10);
  const [y, setY] = useState(10);
  const [rotate, setRotate] = useState(10);

  return (
      <div className="w-full h-screen flex flex-row">
        <div className=" m-16">
          <Cloud/>
        </div>
        <div className=" m-16">
          <CloudTwo/>
        </div>
        <div className=" m-16">
          <CloudThree/>
        </div>
        <div className=" m-16">
          <CloudCustom
            floating
            isSubCloud
            isSubCloudSize
          />
        </div>
      </div>

  )
}


const Cloud = () => {
  return (
    <div className="relative w-48 h-16 bg-white rounded-full shadow-md animate-float">
      <div className="absolute w-24 h-24 bg-white rounded-full shadow-md -top-7 left-12 animate-float"></div>
      <div className="absolute w-24 h-24 bg-white rounded-full shadow-md -top-10 left-20 animate-float"></div>
      <div className="absolute w-24 h-24 bg-white rounded-full shadow-md -top-7 right-12 animate-float"></div>
      <div className="absolute w-24 h-24 bg-white rounded-full shadow-md -top-5 right-5 animate-float"></div>
    </div>
  );
};
const CloudTwo = () => {
  return (
    <div className="relative w-48 h-16 bg-white rounded-full shadow-md animate-float">
      <div className="absolute w-24 h-24 bg-white rounded-full shadow-md -top-10 left-20 animate-float"></div>
      <div className="absolute w-23 h-24 bg-white rounded-full shadow-md -top-7 right-12 animate-float"></div>
      <div className="absolute w-24 h-32 bg-white rounded-full shadow-md -top-7 left-12 animate-float"></div>
      <div className="absolute w-32 h-24 bg-white rounded-full shadow-md -top-5 right-5 animate-float"></div>
    </div>
  );
};
const CloudThree = () => {
  return (
    <div className="relative w-48 h-16 bg-white rounded-full shadow-md animate-float">
      <div className="absolute w-32 h-24 bg-white rounded-full shadow-md -top-5 right-5 animate-float"></div>
      <div className="absolute w-24 h-22 bg-white rounded-full shadow-md -top-7 right-12 animate-float"></div>
      <div className="absolute w-24 h-24 bg-white rounded-full shadow-md -top-7 left-12 animate-float"></div>
      <div className="absolute w-24 h-24 bg-white rounded-full shadow-md -top-10 left-20 animate-float"></div>
    </div>
  );
};

export type CloudProps = Omit<HTMLAttributes<HTMLDivElement>, "id"> & {
  floating?: boolean,
  isSubCloud?: boolean,
  isSubCloudSize?: boolean,

}

const CloudCustom: FunctionComponent<CloudProps> = ({ floating, isSubCloud, isSubCloudSize }) => {
  return (
    <div className={cx(
        "relative w-48 h-16 bg-white rounded-full shadow-md", 
        floating && "animate-float")}>
      <div className={cx(
        "absolute bg-white rounded-full shadow-md", 
        floating && "animate-float",
        isSubCloud && "w-32 h-24",
        isSubCloudSize && "-top-5 right-5")}></div>
      <div className={cx(
        "absolute  bg-white rounded-full shadow-md", 
        floating && "animate-float",
        isSubCloud && "w-24 h-22", 
        isSubCloudSize && "-top-7 right-12")}></div>
      <div className={cx(
        "absolute bg-white rounded-full shadow-md", 
        floating && "animate-float",
        isSubCloud && "w-24 h-24", 
        isSubCloudSize && "-top-7 left-12")}></div>
      <div className={cx(
        "absolute bg-white rounded-full shadow-md", 
        floating && "animate-float",
        isSubCloud && "w-24 h-24", 
        isSubCloudSize && "-top-10 left-20")}></div>
    </div>
  );
}