'use client'

import { FunctionComponent, HTMLAttributes } from "react";
import CloudCustom from "./components/CloudCustom";
import IslandScene from "./components/IslandSceene";

export default function Home () {
  return (
    <IslandScene/>
      // <div className="w-full h-screen flex flex-row static">
      //   <div className=" m-16">
      //     <CloudCustom
      //       floating
      //       isSubCloud
      //       isSubCloudSize
      //     />
      //   </div>
      //   <Ground/>
      // </div>
  )
}

export type GroundProps = Omit<HTMLAttributes<HTMLElement>, "id">

const Ground: FunctionComponent<GroundProps> = ({children}) => {
  return (
    <div>
      <div className="w-11 h-12 bg-amber-900 absolute bottom-1 rounded-full border border-black"/>
      <div className="w-10 h-11 bg-amber-900 absolute bottom-0 rounded-full"/>
    </div>
  )
}