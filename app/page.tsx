import Filter from "@/components/Filter"
import Property from "@/components/PropertyCard"

export default function IndexPage() {
  return (
    <section className="container grid  items-center gap-6 pb-8 pt-6 md:py-10 ">
      <h1 className="text-4xl font-bold">Search properties to rent</h1>
      <Filter />
      <div className="flex ">
        <div className="flex overflow-hidden max-w-screen-lg grid-cols-auto-fill flex-row flex-wrap gap-6 mx-auto">
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
      </div>
    </section>
  )
}
