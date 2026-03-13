
import Footer from "./components/Common/Footer";
import Navbar from "./components/Common/Navbar";
import "./globals.css";
import CustomCursor from "./Reusable/CustomCursor";
import RouterLoader from "./Reusable/RouteLoader";
import { Wendy_One } from "next/font/google";

export const metadata = {
  title: "Woxxin Solution",
  description: "Woxxin Solution",
};

const wendyOne = Wendy_One({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={wendyOne.className}
      >
        <RouterLoader >
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
        </RouterLoader>
      </body>
    </html>
  );
}
