"use client";

import PrimaryBtn from "../buttons/ButtonPrimary";
import SecondaryBtn from "../buttons/ButtonSecondary";
import CopyIcon from "../icons/CopyIcon";
import { WhatsappLogoIcon } from "@phosphor-icons/react";
import { Files } from "@phosphor-icons/react";
import Image from "next/image";

function Hero() {
  return (
    <section className="y-portfolio__hero-wrapper relative overflow-hidden">
      <div className="mx-auto w-full px-1 sm:px-6 lg:px-0">
        <div className="y-folio__left-hang-on absolute w-max left-0 hidden lg:block">
          <Image
            src="/images/home/banner-left.png"
            alt="banner-left-hang"
            width={140}
            height={100}
            className="w-full h-auto y-folio__left-hang-image"
          />
        </div>
        <div
          className="
            y-portfolio__hero-inner
            flex
            h-auto
            sm:min-h-dvh
            flex-col
            items-center
            justify-center
            gap-4
            py-8
            sm:py-20
            sm:gap-5
            lg:gap-6
          "
        >
          {/* ========================================
              HEADING
          ======================================== */}

          <div
            className="
              y-porfolio__heading-area
              flex
              w-full
              max-w-5xl
              flex-col
              gap-3
              text-center
              sm:gap-4
            "
          >
            <h1
              className="
                y-portolio__hero-title
                gradient-text
                flex
                flex-col
                gap-[12px]
                px-2
                text-[28px]
                sm:text-[clamp(2.5rem,8vw,4.5rem)]
                font-bold
                leading-[1.05]
                tracking-tight
                sm:px-0
              "
            >
              <span className="tracking-[2px]">Spot the gap.</span>
              <span className="tracking-[2px]">Solve the Problem.</span>
            </h1>

            <p
              className="
                y-portfolio__hero-title-desc
                mx-auto
                max-w-2xl
                px-2
                text-base
                sm:px-0
                sm:text-lg
                md:text-[16px]
                opacity-70
                font-light
                leading-[24px]
              "
            >
              Finding what the output misses, and{" "}
              shaping what the product needs.
            </p>
          </div>

          {/* ========================================
              CTA
          ======================================== */}

          <div
            className="
              y-portfolio__hero-cta-area
              my-3
              flex
              w-full
              items-center
              justify-center
              gap-2
              px-2
              sm:w-max
              sm:gap-3
              sm:px-0
            "
          >

            <a
              href="https://wa.me/8248914992"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-[12px] bg-black px-2 py-[10px] sm:px-3 text-sm text-white transition-opacity hover:opacity-80 sm:px-2 sm:py-[10px] sm:text-base md:w-[187px]"

            >
              <WhatsappLogoIcon
                weight="regular"
                aria-hidden="true"
                className="size-5 shrink-0 sm:size-6"
              />

              <span className="whitespace-nowrap">Get in touch</span>
            </a>

            <a
              href="/works"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-[12px] border-[1.5px] border-solid border-[#03B197] bg-transparent px-2 py-[9px] text-sm font-normal text-black transition-colors hover:bg-[#03B197]/10 sm:gap-3 sm:px-3 sm:text-base md:px-[32px]"
            >
              <Files
                weight="regular"
                aria-hidden="true"
                className="size-5 shrink-0 sm:size-6"
              />
              <span className="whitespace-nowrap">Explore</span>
            </a>

          </div>
        </div>
        <div className="y-folio__right-hang-on absolute w-max right-0 bottom-20 hidden lg:block">
          <Image
            src="/images/home/banner-right.png"
            alt="banner-right"
            width={300}
            height={100}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
