import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const style = {
  footerLink:
    "text-white hover:text-emerald-400 transition-colors duration-300 poppins-regular",
  h2: "text-2xl font-semibold mb-4 poppins-regular text-emerald-400",
  sectionTitle: "text-lg font-medium mb-2 text-gray-200",
  footerText: "text-sm text-gray-400",
};

const socialLinks = [
  { href: "https://facebook.com", label: "Facebook", icon: Facebook },
  { href: "https://twitter.com", label: "Twitter", icon: Twitter },
  { href: "https://instagram.com", label: "Instagram", icon: Instagram },
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
];

const primaryPages = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
];

export function SiteFooter() {
  return (
    <footer className="w-full bg-gradient-to-br from-black to-emerald-950 text-white">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:justify-items-center">
          {/* Primary Pages */}
          <div>
            <h2 className={style.h2}>Quick Links</h2>
            <ul className="space-y-2">
              {primaryPages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className={style.footerLink}>
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h2 className={style.h2}>Follow Us</h2>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={style.footerLink + " flex items-center gap-4"}
                  >
                    <link.icon size={20} />
                    <span className="hidden md:block">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div className="col-span-2 md:col-span-1">
            <h2 className={style.h2}>Address</h2>
            <p className={style.footerText}>
              W/NO. 1, OPTIVOX TECHNOLOGIES (OPC) PRIVATE LIMITED, NINGTHOUKHOG,
              AWANG KHUNOU, NINGTHOUKHONG AWANG, BISHNUPUR, MANIPUR, Pin 795126
            </p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800">
          <Link href="/" className="flex items-center mb-4 md:mb-0">
            <Image
              src="/images/001.png" // Update the image path with your actual logo
              alt="Optivoxx Technologies Logo"
              width={100}
              height={100}
              className="hover:opacity-90"
            />
            <span className="ml-4 text-3xl font-semibold text-emerald-400 hover:text-emerald-500 transition-colors">
              Optivoxx Technologies
            </span>
          </Link>
          <div className="text-center md:text-left">
            <p className={style.footerText}>
              Copyright ©️ 2025 OPTIVOX TECHNOLOGIES (OPC) PRIVATE LIMITED. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
