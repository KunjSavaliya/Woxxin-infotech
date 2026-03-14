import Footer from "./components/Common/Footer";
import Navbar from "./components/Common/Navbar";
import "./globals.css";
import CustomCursor from "./Reusable/CustomCursor";
import RouterLoader from "./Reusable/RouteLoader";
import { DM_Sans } from "next/font/google";

export const metadata = {
  title: "Woxxin Solution",
  description: "Woxxin Solution",
};

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <RouterLoader>
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
        </RouterLoader>
      </body>
    </html>
  );
}