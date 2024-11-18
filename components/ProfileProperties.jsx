"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import deleteProperty from "@/app/actions/deleteProperty";
import MakeFeaturedButton from "./FeaturedButton";

const ProfileProperties = ({ properties: initialProperties }) => {
  const [properties, setProperties] = useState(initialProperties);

  const handleDeleteProperty = async (propertyId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this Venue?"
    );

    if (!confirmed) return;
    await deleteProperty(propertyId);

    const updatedProperties = properties.filter(
      (property) => property._id !== propertyId
    );

    setProperties(updatedProperties);

    toast.success("Venue deleted successfully!");
  };

  const handleMakeFeatured = async (propertyId) => {
    try {
      const response = await fetch("/api/properties/make-featured", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ propertyId }),
      });

      if (!response.ok) {
        throw new Error("Failed to make property featured");
      }

      const updatedProperty = await response.json();

      // Update the state with the new property data
      const updatedProperties = properties.map((property) =>
        property._id === updatedProperty.property._id
          ? updatedProperty.property
          : property
      );
      setProperties(updatedProperties);

      toast.success("Property successfully marked as featured!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to mark property as featured");
    }
  };

  return properties.map((property) => (
    <div key={property._id} className="mb-10">
      <Link href={`/properties/${property._id}`}>
        <Image
          className="h-32 w-full rounded-md object-cover"
          src={property.images[0]}
          alt={`Property ${property.name}`}
          width={1000}
          height={200}
        />
      </Link>
      <div className="mt-2">
        <p className="text-lg font-semibold">{property.name}</p>
        <p className="text-gray-600">
          Address: {property.location.street} {property.location.city}{" "}
          {property.location.state}
        </p>
      </div>
      <div className="mt-2">
        <Link
          href={`/properties/${property._id}/edit`}
          className="bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600"
        >
          Edit
        </Link>
        <button
          className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
          type="button"
          onClick={() => handleDeleteProperty(property._id)}
        >
          Delete
        </button>
        {!property.is_featured && (
          <MakeFeaturedButton
            propertyId={property._id}
            onMakeFeatured={handleMakeFeatured}
          />
        )}
      </div>
    </div>
  ));
};

export default ProfileProperties;
