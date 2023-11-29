"use client";

import Header from "@/components/Header";
import { redirect } from "next/navigation";
const Body = ({ children }) => <div className="min-container">{children}</div>;
export default function RootLayout({ children }) {
  const authToken =
    typeof window !== "undefined" ? localStorage.getItem("userToken") : null;

  if (!authToken) {
    redirect("/login");
  } else {
    return (
      <div>
        <div>
          <Header />
          <Body>{children}</Body>
        </div>
      </div>
    );
  }
}
