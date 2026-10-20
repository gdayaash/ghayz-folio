"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WhatsappLogoIcon } from "@phosphor-icons/react";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const getSectionHref = (section: string) =>
    isHomePage ? `#${section}` : `/#${section}`;

  return (
    <header className="y-folio__site-header w-full py-4 sm:py-5">
      <div className="mx-auto w-full max-w-[840px] px-4 sm:px-6">
        <div className="y-folio__profile-box flex min-h-12 items-center justify-between gap-3">
          {/* Profile */}
          <Link
            href="/"
            aria-label="Ghayz home"
            className="y-folio__profile-box flex min-w-0 items-center gap-2 sm:gap-2.5"
          >
            <div className="relative size-10 shrink-0 overflow-hidden rounded-full sm:size-12">
              <Image
                src="/images/dp.png"
                alt="Ghayz profile"
                fill
                priority
                sizes="48px"
                className="object-cover"
              />
            </div>

            <span className="truncate font-serif text-2xl font-semibold tracking-tight sm:text-3xl md:text-[26px] logo-header-text">
              Ghayz
            </span>
          </Link>

          <div className="y-folio__menu-box flex items-center gap-6">

            {/* Desktop Navigation */}
            <nav
              aria-label="Main navigation"
              className="hidden md:block"
            >
              <ul className="flex items-center gap-[24px]">
                <li>
                  <Link
                    href={getSectionHref("works")}
                    className="text-base transition-opacity hover:opacity-60 text-[14px]"
                  >
                    Works
                  </Link>
                </li>

                <li>
                  <Link
                    href={getSectionHref("passion")}
                    className="text-base transition-opacity hover:opacity-60 text-[14px]"
                  >
                    Passion
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Contact CTA */}
            <a
              href="https://wa.me/8248914992"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-[12px] bg-black px-[32px] py-[10px] text-sm text-white transition-opacity hover:opacity-80 sm:text-base md:w-[187px]"
            >
              <WhatsappLogoIcon
                weight="regular"
                aria-hidden="true"
                className="size-5 shrink-0 sm:size-6"
              />

              <span className="whitespace-nowrap">Get in touch</span>
            </a>

          </div>

        </div>
      </div>
    </header>
  );
}
