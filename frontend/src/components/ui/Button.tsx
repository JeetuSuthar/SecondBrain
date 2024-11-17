import React, { ReactElement } from 'react'
import { CiCirclePlus } from "react-icons/ci";
export interface ButtonProps{
    variant:Variants;
    size?:"sm"|"md"|"lg";
    text?:string;
    startIcon?:any;
    endIcon?:any;
    onClick?:()=>void;
}
type Variants="primary" |"secondary";
const variantStyles={
    "primary":"bg-indigo-600 text-white rounded-md py-1 px-3",
    "secondary":"bg-indigo-400 text-white rounded-md py-1 px-3"
}
const sizeStyles={
    "sm":" rounded-md py-1 px-2 ",
    "md":" rounded-md py-2 px-3 ",
    "lg":" rounded-md py-3 px-5"
}

export const Button = (props:ButtonProps) => {
    return <button className={`${sizeStyles[props.size || "md"]}+ ${variantStyles[props.variant]}`}><div className='flex items-center
     gap-2'>{props.startIcon}{props.text}</div></button>
  
  
}

