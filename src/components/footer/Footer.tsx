"use client";

import Image from "next/image";
import {
  EnvelopeSimpleIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

interface FooterProps {
  imagePath?: string;
  backgroundImage?: string;
  textColorClass?: string;
}

export default function Footer({
  imagePath = "/images/dp.png",
  backgroundImage = "/images/footer/footer-bg.png",
  textColorClass = "text-black",
}: FooterProps) {
  return (
    <footer
      className="y-folio__footer-wrapper min-h-[80dvh]"
      style={{
        backgroundImage: `url("${backgroundImage}")`,
      }}
    >
      <div className="y-folio_-footer-inner container mx-auto">
        <div className="y-folio__footer-column-one flex flex-col gap-y-4">
          {/* Profile */}
          <div className="y-folio__profile-box flex min-w-0 items-center gap-x-2 sm:gap-x-3">
            <div className="y-folio__profile-image-box shrink-0">
              <Image
                src={imagePath}
                alt="Dayaash"
                width={50}
                height={50}
                className="y-folio__header-profile-image h-10 w-10 rounded-lg object-cover sm:h-12 sm:w-12"
              />
            </div>

            <div className="y-folio__profile-desc-box min-w-0">
              <h3
                className={`y-folio__user-title truncate text-2xl font-semibold sm:text-2xl lg:text-3xl ${textColorClass}`}
              >
                Ghayz
              </h3>
            </div>
          </div>

          {/* Description */}
          <p
            className={`y-folio__footer-desc w-full text-[16px] md:w-1/4 sm:w-full ${textColorClass} font-light`}
          >
            Product designer working across product strategy, experience, and
            growth turning unclear problems into products people understand and
            use.
          </p>

          {/* Social icons */}
          <div
            className={`y-folio__social-icons flex items-center gap-x-2 ${textColorClass}`}
          >
            <a href="https://www.instagram.com/low_lightings?utm_source=ig_web_button_share_sheet&vrfl=ZDNlZDc0MzIxNw==" target="_blank">
              <InstagramLogoIcon size={32} />
            </a>

            <a
              href="https://in.linkedin.com/in/ghaytheri-s-548964235"
              target="_blank"
              aria-label="visit-linkedIn-profile"
            >
              <LinkedinLogoIcon size={32} />
            </a>

            <a
              href="mailto:ghaytherighayz@gmail.com"
              aria-label="Send an email"
            >
              <EnvelopeSimpleIcon size={36} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
