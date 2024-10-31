import { DM_Sans } from "next/font/google";
import "./globals.css";


const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Landing Page Next Js",
  description: "Practicing Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-[#EAEEFE]`}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        // className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}
      >
        {children}
      </body>
    </html>
  );
}
