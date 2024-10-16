import PropertyCard from "@/components/PropertyCard";
import connectDb from "@/config/database";
import Property from "@/models/Property";

const PropertiesPage = async () => {
  await connectDb();
  const properties = await Property.find({}).lean();
  console.log(process.env.MONGODB_URI);

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;