import { cx } from "class-variance-authority";
import { FunctionComponent, HTMLAttributes } from "react";

export type CloudProps = Omit<HTMLAttributes<HTMLDivElement>, "id"> & {
    floating?: boolean,
    isSubCloud?: boolean,
    isSubCloudSize?: boolean,
}
  
const CloudCustom: FunctionComponent<CloudProps> = ({ floating, isSubCloud, isSubCloudSize }) => {
    return (
        <div className={cx(
            "relative w-48 h-16 bg-white rounded-full shadow-md", 
            floating && " animate-move")}>
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

export default CloudCustom