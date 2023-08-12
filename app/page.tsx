'use client'
import Filter from "@/components/Filter"
import PropertyCard from "@/components/PropertyCard"

import { useProperties } from "@/hooks/useProperties";
import { IProperties } from "@/types/properties.types";


export default function IndexPage() {
  const { properties, loading } = useProperties()

  return (
    <section className="grid min-w-full items-center gap-6 pb-8 pt-6 md:container md:py-10">
      <h1 className="text-4xl font-bold">Search properties to rent
        <span className="mx-6 text-[6px] text-red-500">NOTE: property type filter only works for now.</span>
      </h1>
      <Filter />
      <div className="grid auto-cols-auto gap-6 md:grid-cols-auto-fill ">
        {loading ? (
          Array(10).fill(1, 0, 10).map((_, index) => (
            <div key={index + _} className="h-56 min-w-[320px] animate-pulse rounded-md bg-gray-400" /> // properties loading skeleton
          ))
        ) : (
          properties?.map((property: IProperties) => (
            property.id && <PropertyCard key={property.id} {...property} /> // fetched properties
          ))
        )}
      </div>
    </section>
  )
}
