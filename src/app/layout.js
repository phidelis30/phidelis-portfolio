import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Phidelis(Full stack web developer) | Portfolio",
  description:
    "I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with TypeScript, React, Redux, Node.js, Express, MongoDB, Sequelize, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
