"use client"

import { WhatsappLogoIcon } from "@phosphor-icons/react";
import PrimaryBtn from "../buttons/ButtonPrimary";
import SealCheckIcon from "../icons/TickIcon";

function ContactUsCta() {
  return (
    <section className="y-folio__contact-us-wrapper py-8 sm:py-10 lg:py-12 hidden md:block">
      <div className="y-folio__contact-us-inner flex flex-col gap-y-3">
        <div
          className="
            y-folio__contact-us-box
            container
            mx-auto
            flex
            w-[calc(100%-2rem)]
            flex-col
            items-center
            gap-y-2
            rounded-[28px]
            px-5
            py-8
            sm:w-[90%]
            sm:rounded-[40px]
            sm:px-8
            sm:py-10
            md:w-[80%]
            lg:w-[60%]
            lg:rounded-[60px]
            lg:px-4
            lg:py-12
          "
        >
          <h4
            className="
              y-folio__contact-us-title
              text-[clamp(2rem,6vw,3rem)]
              font-semibold
              leading-tight
              text-white
              tracking-[2.5px]
            "
          >
            Contact
          </h4>

          <p
            className="
              y-folio__contact-desc
              px-2
              text-center
              text-base
              leading-relaxed
              text-white
              opacity-80
              sm:text-lg
              lg:text-[24px]
              font-light
              opacity-80
            "
          >
            Have a product problem worth solving? <br />
            I&apos;d like to hear about it.
          </p>

          <div className="mt-4 sm:mt-5 lg:mt-6">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUsCta;
