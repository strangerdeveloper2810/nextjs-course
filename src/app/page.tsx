import React from "react";
import { Inter } from "next/font/google";
import Paragraph from "./components/ui/Paragraph";

const inter = Inter({ subsets: ["latin"] });

const Home: React.FC = () => {
  return (
    <main className="bg-red-500">
      <Paragraph/>
    </main>
  );
};

export default Home;
