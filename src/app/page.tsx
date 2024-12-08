import HomePage from "./componets/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Cybersecurity",
  description: "AI Cybersecurity for everyone",
};

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>  
  );
}
