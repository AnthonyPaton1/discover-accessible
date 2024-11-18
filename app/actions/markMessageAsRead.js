"use server";
import connectDb from "@/config/database";
import User from "@/models/User";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

async function markMessageAsRead(messageId) {
  await connectDb();
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");
  }
  const { userId } = sessionUser;
  const message = await Message.findById(messageId);

  if (!message) throw new Error("Message not found");

  //verify message
  if (message.recipient.toString() !== userId) {
    throw new Error("Unauthorised ");
  }

  message.read = !message.read;
  revalidatePath("/messages", "page");

  await message.save();

  return message.read;
}

export default markMessageAsRead;
