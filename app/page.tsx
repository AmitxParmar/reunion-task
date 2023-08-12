'use client'
import Filter from "@/components/Filter"
import Property from "@/components/PropertyCard"
import { useEffect } from "react";

export default function IndexPage() {
  
  useEffect(() => { 

  }, []);

  return (
    <section className="container grid  items-center gap-6 pb-8 pt-6 md:py-10 ">
      <h1 className="text-4xl font-bold">Search properties to rent</h1>
      <Filter />

      <div className="grid  grid-cols-auto-fill gap-6 ">
        <Property image="/test.jpg" />
        <Property image="/test.jpg" />
        <Property image="/test.jpg" />
        <Property image="/test.jpg" />
        <Property image="/test.jpg" />
        <Property image="/test.jpg" />
        <Property image="/test.jpg" />
        <Property image="/test.jpg" />
        <Property image="/test.jpg" />
        <Property image="/test.jpg" />
        <Property image="/test.jpg" />
        <Property image="/test.jpg" />
        <Property image="/test.jpg" />
        <Property image="/test.jpg" />
        <Property image="/test.jpg" />
      </div>

    </section>
  )
}
