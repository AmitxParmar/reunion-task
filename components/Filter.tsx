'use client'
import React from "react"
import { Separator } from "@/components/ui/separator"
import { Button } from "./ui/button"
import { Calendar } from "lucide-react"

const Filter = () => {
  
  return (
    <div className="flex h-16 w-full max-w-screen-lg items-center justify-evenly rounded-sm border bg-white p-6 shadow-md">
      <div className="grid grid-flow-row text-start">
        <span className="text-sm text-gray-400">Location</span>
        <span className="font-semibold">New York, USA</span>
      </div>
      <Separator orientation="vertical" />
      <div className="grid grid-flow-row text-start">
        <span className="text-sm text-gray-400">When</span>
        <span className="font-semibold">Select Move-In Date</span>
      </div>
      <Separator className='' orientation="vertical" />
      <div className="grid grid-flow-row text-start">
        <span className="text-sm text-gray-400">Location</span>
        <span className="font-semibold">New York, USA</span>
      </div>
      <Separator orientation="vertical" />
      <div className="grid grid-flow-row text-start">
        <span className="text-sm text-gray-400">Location</span>
        <span className="font-semibold">New York, USA</span>
      </div>
      <Separator orientation="vertical" />
      <div className="grid grid-flow-row text-start">
        <Button className="" >
          Search
        </Button>
      </div>
    </div>
  )
}

export default Filter
