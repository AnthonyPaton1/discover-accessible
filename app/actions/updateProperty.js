"use server";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { uploadImages } from "./uploadImages";

async function updateProperty(propertyId, formData) {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");
  }

  const { userId } = sessionUser;

  const existingproperty = await Property.findById(propertyId);

  //Verify ownership

  if (existingproperty.owner.toString() !== userId) {
    throw new Error("Current user does not own this property");
  }

  const amenities = formData.getAll("amenities");

  const propertyData = {
    type: formData.get("type"),
    name: formData.get("name"),
    description: formData.get("description"),
    location: {
      street: formData.get("location.street"),
      city: formData.get("location.city"),
      county: formData.get("location.county"),
      postcode: formData.get("location.postcode"),
    },
    // beds: formData.get("beds"),
    // baths: formData.get("baths"),
    // square_feet: formData.get("square_feet"),
    amenities,
    rates: {
      weekly: formData.get("rates.weekly"),
      monthly: formData.get("rates.monthly"),
      nightly: formData.get("rates.nightly."),
    },
    seller_info: {
      name: formData.get("seller_info.name"),
      email: formData.get("seller_info.email"),
      phone: formData.get("seller_info.phone"),
    },
  };

  if (images.length > 0) {
    propertyData.images = await uploadImages(images);
  }

  const updatedproperty = await Property.findByIdAndUpdate(
    propertyId,
    propertyData
  );

  revalidatePath("/", "layout");

  redirect(`/properties/${updatedproperty._id}`);
}

export default updateProperty;
