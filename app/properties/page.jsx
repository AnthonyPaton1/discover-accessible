"use client";
import PropertyCard from "@/components/PropertyCard";
import Pagination from "@/components/Pagination";
import connectDb from "@/config/database";
import Property from "@/models/Property";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const PropertiesPage = () => {
  const [properties, setProperties] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);

  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchProperties = async () => {
      const pageParam = parseInt(searchParams.get("page") || "1");
      const pageSizeParam = parseInt(searchParams.get("pageSize") || "9");
      setPage(pageParam);
      setPageSize(pageSizeParam);

      await connectDb();
      const skip = (pageParam - 1) * pageSizeParam;

      const total = await Property.countDocuments({});
      const properties = await Property.find({})
        .skip(skip)
        .limit(pageSizeParam);

      setProperties(properties);
      setTotal(total);
    };

    fetchProperties();
  }, [searchParams]);

  const showPagination = total > pageSize;

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p>No Venues found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
      {showPagination && (
        <Pagination page={page} pageSize={pageSize} totalItems={total} />
      )}
    </section>
  );
};

export default PropertiesPage;
