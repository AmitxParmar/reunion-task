'use client'
import Filter from "@/components/Filter"
import PropertyCard from "@/components/PropertyCard"
import { useProperties } from "@/hooks/useProperties";
import { IProperties } from "@/types/properties.types";


export default function IndexPage() {
  const { properties, loading } = useProperties()

  return (
    <section className="container grid  items-center gap-6 pb-8 pt-6 md:py-10 ">
      <h1 className="text-4xl font-bold">Search properties to rent</h1>
      <Filter />

      <div className="grid grid-cols-auto-fill gap-6 ">
        {loading ? (
          <div className="grid grid-cols-auto-fill gap-12">
            <div className="h-56 min-w-[320px] animate-pulse rounded-md bg-gray-400" />
            <div className="h-56 min-w-[320px] animate-pulse rounded-md bg-gray-400" />
            <div className="h-56 min-w-[320px] animate-pulse rounded-md bg-gray-400" />
            <div className="h-56 min-w-[320px] animate-pulse rounded-md bg-gray-400" />
            <div className="h-56 min-w-[320px] animate-pulse rounded-md bg-gray-400" />
          </div>
        ) :
          properties?.map((property: IProperties) => (
            property.id && <PropertyCard key={property.id} {...property} />
          ))
        }
      </div>
    </section>
  )
}
