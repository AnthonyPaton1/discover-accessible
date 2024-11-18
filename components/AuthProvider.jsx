"use client";
import { SessionProvider, sessionProvider } from "next-auth/react";

import React from "react";

const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
