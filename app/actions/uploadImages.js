import cloudinary from "@/config/cloudinary";

export async function uploadImages(images) {
  const imageUrls = [];

  for (const imageFile of images) {
    const imageBuffer = await imageFile.arrayBuffer();
    const imageArray = Array.from(new Uint8Array(imageBuffer));
    const imageData = Buffer.from(imageArray);

    // Convert image to base64
    const imageBase64 = imageData.toString("base64");

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(
      `data:image/png;base64,${imageBase64}`,
      { folder: "accessiblevenues" }
    );

    imageUrls.push(result.secure_url);
  }

  return imageUrls;
}
