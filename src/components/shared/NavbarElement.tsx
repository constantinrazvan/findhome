"use client"
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavbarElement = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "For rent", href: "/for-rent" },
    { id: 3, label: "For sale", href: "/for-sale" },
    { id: 4, label: "Sell or rent!", href: "/contact" },
    { id: 5, label: "Admin", href: "/admin" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-emerald-500">findHome</div>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) =>
            link.id === 4 || link.id === 5 ? (
              <Link
                key={link.id}
                href={link.href}
                className="bg-gradient-to-r from-green-500 to-emerald-600 
                           text-white px-4 py-2 rounded-xl shadow 
                           font-semibold hover:opacity-90 transition"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.id}
                href={link.href}
                className={`py-2 transition hover:text-emerald-600 ${
                  isActive(link.href)
                    ? "text-emerald-600 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <div className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) =>
              link.id === 4 || link.id === 5 ? (
                <Link
                  key={link.id}
                  href={link.href}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 
                             text-white px-4 py-2 rounded-xl shadow 
                             font-semibold text-center hover:opacity-90 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`text-gray-700 hover:text-emerald-600 transition py-2 text-center ${
                    isActive(link.href) ? "font-semibold text-emerald-600" : ""
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