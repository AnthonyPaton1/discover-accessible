import connectDB from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";

// Named export for POST method depending on next version
export const POST = async (req, res) => {
  await connectDB();

  const { messageId, replyContent } = req.body;
  const sessionUser = await getSessionUser(req);
  if (!sessionUser) {
    return res.json({ error: "Not authenticated" }).status(401);
  }

  try {
    const message = await Message.findById(messageId);
    message.replies.push({
      sender: sessionUser.userId,
      content: replyContent,
    });
    await message.save();

    return res.json({ success: true }).status(200);
  } catch (error) {
    console.error(error);
    return res.json({ error: "Failed to save reply" }).status(500);
  }
};

// Named export for GET method depending on next v
export const GET = async (req, res) => {
  await connectDB();

  try {
    const { property } = req.query;
    const messages = await Message.find({ property: property })
      .populate("replies.sender", "username email")
      .populate("property");

    return res.json(messages).status(200);
  } catch (error) {
    console.error(error);
    return res.json({ error: "Failed to fetch messages" }).status(500);
  }
};
