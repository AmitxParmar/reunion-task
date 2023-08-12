'use client'
import React, { useState } from "react"
import SelectDate from "./SelectDate"
import { Separator } from "@/components/ui/separator"
import { Button } from "../ui/button"
import Categories from "./Categories"


const Filter = () => {
  const [date, setDate] = useState<Date>()

  return (
    <div className="mx-auto flex h-16 w-full min-w-full max-w-screen-lg items-center justify-evenly rounded-sm border bg-background p-6 shadow-md">

      <div className="grid grid-flow-row text-start">
        <span className="text-sm text-gray-400">Location</span>
        <span className="font-semibold">New York, USA</span>
      </div>

      <Separator orientation="vertical" />
      <div className="grid grid-flow-row text-start">
        <SelectDate date={date} setDate={setDate} />
      </div>

      <Separator orientation="vertical" />
      <div className="grid grid-flow-row text-start">
        <span className="text-sm text-gray-400">Price</span>
        <span className="font-semibold">$500-$1,000</span>
      </div>

      {/* ----Category filter---- */}
      <Separator orientation="vertical" />
      <div className="grid grid-flow-row text-start">
        <span className="text-sm text-gray-400">Property Type</span>
        <Categories />
      </div>
      {/* ----Category Filter---- */}

      {/* Search button */}
      <Separator orientation="vertical" />
      <div className="grid grid-flow-row text-start">
        <Button className="" >
          Search
        </Button>
      </div>
      {/* ----Search button------ */}
    </div>
  )
}

export default Filter
