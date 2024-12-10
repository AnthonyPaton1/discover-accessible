import GoogleProvider from "next-auth/providers/google";
import connectDb from "@/config/database";
import User from "@/models/User";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      await connectDb();
      const user = await User.findOne({ email: profile.email });

      if (!user) {
        await User.create({
          email: profile.email,
          username: profile.name,
          image: profile.picture,
          role: profile.email === process.env.ADMIN_EMAIL ? "admin" : "user",
        });
      }
      return true;
    },
    async session({ session }) {
      const user = await User.findOne({ email: session.user.email });
      session.user.id = user?._id.toString();
      session.user.role = user?.role || "user";
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
