"use server";
import connectDb from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";

async function getUnreadMessageCount() {
  await connectDb();
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");
  }
  const { userId } = sessionUser;

  const count = await Message.countDocuments({
    recipient: userId,
    read: false,
  });
  return { count };
}

export default getUnreadMessageCount;
