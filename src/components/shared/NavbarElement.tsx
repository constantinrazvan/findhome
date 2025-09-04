"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarElement = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "For rent", href: "/for-rent" },
    { id: 3, label: "For sale", href: "/for-sale" },
    { id: 4, label: "Sell or rent!", href: "/contact" },
    { id: 5, label: "Admin", href: "/admin/login" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white shadow-lg"
          : pathname === "/"
            ? "bg-white"
            : "bg-gray-50"
        }`}
    >

      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className={'text-2xl font-bold transition-colors text-emerald-500'}
        >
          findHome
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) =>
            link.id === 4 || link.id === 5 ? (
              <Link
                key={link.id}
                href={link.href}
                className="bg-emerald-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-emerald-600 transition duration-300"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.id}
                href={link.href}
                className={`py-2 transition ${isActive(link.href)
                    ? "text-emerald-600 font-semibold"
                    : isScrolled
                      ? "text-gray-700 hover:text-emerald-600"
                      : "text-black hover:text-black/80"
                  }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) =>
              link.id === 4 || link.id === 5 ? (
                <Link
                  key={link.id}
                  href={link.href}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-xl font-semibold text-center"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`text-gray-700 hover:text-emerald-600 transition py-2 text-center ${isActive(link.href) ? "font-semibold text-emerald-600" : ""
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarElement;