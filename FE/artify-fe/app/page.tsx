"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LogoBackgroundImage from "./components/background/logoBackgroundImage";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyPress = () => {
      router.push("/login");
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [router]);

  return (
    <>
      <LogoBackgroundImage />
    </>
  );
}
