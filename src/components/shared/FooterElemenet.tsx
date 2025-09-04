"use client";

import Link from "next/link";

export default function FooterElement() {
  return (
    <footer className="bg-emerald-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-4">findHome</h2>
            <p className="text-gray-200 text-sm">
              findHome is our real estate platform that helps you find your dream home.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Companie</h3>
            <ul className="space-y-2 text-gray-100">
              <li>
                <Link href="/about-us" className="hover:underline">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-100">
              <li>
                <Link href="/for-sale" className="hover:underline">
                  Buy
                </Link>
              </li>
              <li>
                <Link href="/for-rent" className="hover:underline">
                  Rent
                </Link>
              </li>
              <li>
                <Link href="contact" className="hover:underline">
                  Manage my property
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-100">
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:underline">
                  Terms and conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Social</h3>
            <div className="flex flex-col space-y-2">
              <Link href="#" className="hover:text-gray-300">
                Facebook
              </Link>
              <Link href="#" className="hover:text-gray-300">
                Instagram
              </Link>
              <Link href="#" className="hover:text-gray-300">
                LinkedIn
              </Link>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-emerald-400 pt-6 text-center text-gray-200 text-sm">
          © 2023 findHome. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
