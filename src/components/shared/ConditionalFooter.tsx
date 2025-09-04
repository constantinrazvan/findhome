"use client";
import { usePathname } from "next/navigation";
import FooterElement from "./FooterElemenet";

const ConditionalFooter = () => { 
    const pathname = usePathname();
  
  const hideNavbarRoutes = [
    "/admin",
    "/login"
  ];
  
  const shouldHideNavbar = hideNavbarRoutes.some(route => 
    pathname?.startsWith(route)
  );
  
  if (shouldHideNavbar) {
    return null;
  }
  
  return <FooterElement />;
}

export default ConditionalFooter