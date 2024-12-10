export function convertToSerializableObject(leanDocument) {
  // Check if the object is null or empty
  if (!leanDocument || Object.keys(leanDocument).length === 0) {
    console.warn("No properties found or leanDocument is empty.");
    return leanDocument; // Return as is, or handle accordingly
  }

  // Proceed with your serialization logic if the object is valid
  for (const key of Object.keys(leanDocument)) {
    const value = leanDocument[key];
    if (
      value &&
      typeof value.toJSON === "function" &&
      typeof value.toString === "function"
    ) {
      leanDocument[key] = value.toString();
    }
  }

  return leanDocument;
}
