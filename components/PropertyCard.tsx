import Image from "next/image"
import React, { memo } from "react"
import { Separator } from "@radix-ui/react-separator"
import { BedSingle, Bath, Building } from "lucide-react"

const Property = ({ location, rentFrequency, contactName, price, coverPhoto, baths, rooms, area }: IProperties) => {
  
  return   (
    <div className="relative h-[350px] w-[320px] rounded-md bg-background shadow-lg duration-500 hover:scale-105 hover:bg-primary/5 hover:shadow-xl">
      <figure className="relative h-40">
        <Image priority src={coverPhoto?.url} className="rounded-t-md object-cover" fill alt="property image" />
      </figure>
      <div className="grid-cols-2 grid gap-3 p-6">
        <div className="grid-cols-3 grid">
          <div className="text-gray-400">
            <p className="text-lg font-bold tracking-wide text-primary">${price}<span className="text-xs font-semibold text-gray-400"> /{`${rentFrequency}`}</span></p>
          </div>
          <div className="mt-1">
            <p className="text-xl font-bold">{contactName}</p>
          </div>
          <div className="mt-1">
            <p className="line-clamp-2 text-xs font-semibold tracking-wide text-gray-500">{location[0].name}</p>
          </div>
        </div>
        <Separator className="" color="gray" />
        <div className="flex flex-row justify-between font-sans">
          <div className="max-w-fit text-xs text-primary">
            <BedSingle size={16} className="inline" />
            <span className="align-middle font-normal text-gray-500">{rooms} Beds</span>
          </div>
          <div className="max-w-fit text-xs text-primary">
            <Bath size={16} className="inline" />
            <span className="align-middle font-medium text-gray-500"> {baths} Bathrooms</span>
          </div>
          <div className="max-w-fit text-xs text-primary">
            <Building size={16} className="inline" />
            <span className="align-middle font-medium text-gray-500">{area}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Property)
