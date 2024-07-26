'use client'

import CloudCustom from "./components/CloudCustom";

export default function Home () {
  return (
      <div className="w-full h-screen flex flex-row">
        <div className=" m-16">
          <CloudCustom
            floating
            isSubCloud
            isSubCloudSize
          />
        </div>
        <div className=" m-16">
          <CloudCustom
            floating
            isSubCloud
            isSubCloudSize
          />
        </div>
        <div className=" m-16">
          <CloudCustom
            floating
            isSubCloud
            isSubCloudSize
          />
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