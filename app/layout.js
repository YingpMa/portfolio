import { Outfit, Ovo, EB_Garamond } from "next/font/google";
import "./globals.css";
import Background from "./components/Background";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Yingping's Portfolio",
  description:
    "A portfolio website showcasing full-stack development projects and technical expertise",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        <Background />
        {children}
      </body>
    </html>
  );
}
