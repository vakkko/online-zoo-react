import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "@/styles/_global.scss";

export const metadata: Metadata = {
  title: "online-zoo",
  description: "Explore the virtual zoo experience",
  icons: {
    icon: "/images/about/zoo-favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
