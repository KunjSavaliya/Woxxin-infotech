import Footer from "../components/Common/Footer";
import Navbar from "../components/Common/Navbar";
import "./globals.css";
import RouterLoader from "./Reusable/RouteLoader";
import { DM_Sans } from "next/font/google";
import SmoothScrollProvider from "./Reusable/SmoothScrollProvider";

export const metadata = {
  title: "Woxxin Solution Pvt. Ltd. | End-to-End Digital Excellence",
  description: "Crafting cutting-edge apps, immersive games, and impactful marketing solutions to accelerate growth and engagement.",
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
          <Navbar />
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
          <Footer />
        </RouterLoader>
      </body>
    </html>
  );
}