"use server";

import connectDb from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

async function deleteMessage(messageId) {
  await connectDb();
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User Id is required");
  }

  const { userId } = sessionUser;

  const message = await Message.findById(messageId);

  if (message.recipient.toString() !== userId) {
    throw new Error("Unauthorised");
  }

  await message.deleteOne();

  revalidatePath("/", "layout");
}

export default deleteMessage;
