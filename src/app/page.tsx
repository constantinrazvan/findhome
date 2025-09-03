"use client"
import HomeHero from "@/components/HomeHero";
import ServicesComponent from "@/components/ServicesComponent";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => { 
    document.title = "FindHome - Your Dream Home Awaits";
  }, [])

  return (
    <>
      <HomeHero />
      <ServicesComponent />
    </>
  );
}
