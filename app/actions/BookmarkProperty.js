"use server";
import connectDb from "@/config/database";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

async function bookmarkProperty(propertyId) {
  await connectDb();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");
  }
  const { userId } = sessionUser;

  const user = await User.findById(userId);

  let isBookmarked = user.bookmarks.includes(propertyId);

  let message;

  if (isBookmarked) {
    // if already bookmarked then remove
    user.bookmarks.pull(propertyId);
    message = "Bookmark removed";
    isBookmarked = false;
  } else {
    //If not Bookmarked then add
    user.bookmarks.push(propertyId);
    message = "Bookmark added";
    isBookmarked = true;
  }

  await user.save();
  revalidatePath("/property/saved", "page");

  return {
    message,
    isBookmarked,
  };
}

export default bookmarkProperty;
