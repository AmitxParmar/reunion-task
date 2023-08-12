import Image from "next/image"
import React from "react"

type IProperty = {
  image: string
}

const Property = ({ image, }: IProperty) => {
  return (
    <div className="relative mx-auto h-[300px] w-[320px] rounded-md bg-purple-400">
      <Image className="object-fit relative h-[200px] w-[320px] rounded-t-md" src={image} alt="property image" fill />
      <div className="grid-cols-3 grid gap-3">
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
      </div>
    </div>
  )
}

export default Property
