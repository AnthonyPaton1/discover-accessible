"use client";
import React from "react";

const MakeFeaturedButton = ({
  propertyId,
  onMakeFeatured,
  showMakeFeaturedButton,
}) => {
  if (!showMakeFeaturedButton) return null;

  return (
    <button
      onClick={() => onMakeFeatured(propertyId)}
      className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 ml-2 rounded-lg"
    >
      Make Featured
    </button>
  );
};

export default MakeFeaturedButton;
