import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import connectDb from "@/config/database";
import User from "@/models/User";

const secret = process.env.NEXTAUTH_SECRET;
const adminEmail = process.env.ADMIN_EMAIL;

export default async function verifyAdmin(req) {
  try {
    await connectDb();
    // Extract the token from headers
    const token = await getToken({ req, secret });

    if (!token) {
      console.warn("Unauthorized admin access attempt");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await User.findOne({ email: token.email });

    const isAdmin =
      token.email === adminEmail || (user && user.role === "admin");

    if (!isAdmin) {
      return NextResponse.json(
        { error: "Forbidden: Admins only" },
        { status: 403 }
      );
    }

    // If admin, allow access to the route
    return NextResponse.next(); // Allow the request to continue
  } catch (error) {
    console.error("Error verifying admin:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
