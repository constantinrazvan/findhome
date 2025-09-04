"use client";
import { usePathname } from "next/navigation";
import NavbarElement from "./NavbarElement";

const ConditionalNavbar = () => {
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
  
  return <NavbarElement />;
};

export default ConditionalNavbar;