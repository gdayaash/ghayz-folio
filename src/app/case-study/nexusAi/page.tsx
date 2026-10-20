
"use client";

import CaseStudyHero from "@/components/case-study/CaseHero";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import DesignIframe from "@/components/case-study/DesignIframe";
import Header from "@/components/header/Header";
import { caseStudies } from "@/data/caseStudies";
import { QuoteIcon } from "@phosphor-icons/react";
import Image from "next/image";

export default function NexusAi() {
  return (
    <>
      <Header />
      <NexusAiBody />
    </>
  );
}

export function NexusAiBody() {
  const study = caseStudies.nexusAi;

  const contentSections = [
    study.theChallenge,
    study.theApproach,
    study.visualStorytelling,
    study.theImpact,
  ];

  return (
    <section className="y-folio__case-study-nexus-ai-wrapper w-full overflow-x-clip">
      {/* Hero */}
      <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="y-folio__case-study-banner-area">
          <CaseStudyHero
            title={study.title}
            subTitle={study.subTitle}
            miniTitle="Qoruz | Nexus AI"
          />
        </div>
      </div>

      {/* Hero Image */}
      <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="y-folio__case-study-banner-image w-full overflow-hidden rounded-xl sm:rounded-2xl">
          <Image
            src={study.heroImage.src}
            alt={study.heroImage.alt}
            width={1200}
            height={600}
            priority
            className="block h-auto w-full object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex w-full min-w-0 flex-col gap-16 px-4 pt-16 sm:gap-20 sm:px-6 sm:pt-24 md:gap-24 md:pt-32 lg:px-8 lg:pt-40">
        {contentSections.map((section, index) => (
          <section
            key={section.title}
            className="flex min-w-0 flex-col gap-4 sm:gap-5 md:gap-6"
          >
            {/* Section Title */}
            <h2 className="break-words text-3xl font-bold sm:text-4xl lg:text-[48px]">
              {section.title.trim()}
            </h2>

            {/* Section Subtitle */}
            {section.subtitle && (
              <h3 className="break-words text-xl font-semibold text-white sm:text-2xl">
                {section.subtitle}
              </h3>
            )}

            {/* Section Description */}
            <div className="flex min-w-0 flex-col gap-2 sm:gap-3">
              {section.description.map((paragraph, paragraphIndex) => (
                <p
                  key={paragraphIndex}
                  className="break-words text-base leading-relaxed opacity-75 sm:text-lg lg:text-[24px]"
                >
                  {paragraph.trim()}
                </p>
              ))}
            </div>

            {/* Impact Quote */}
            {index === 3 && (
              <blockquote className="mt-4 text-xl font-semibold leading-relaxed text-white sm:text-2xl lg:text-[28px]">
                {study.theImpact.quote}
              </blockquote>
            )}
          </section>
        ))}

        {/* Designs */}
        <section className="y-folio__case-study-designs flex min-w-0 flex-col gap-4 sm:gap-5 md:gap-6">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-[48px]">
            Designs
          </h2>

          <p className="break-words text-base leading-relaxed opacity-75 sm:text-lg lg:text-[24px]">
            {study.designs.description}
          </p>

          <div className="y-folio__case-study-iframe-box mt-2">
            <DesignIframe
              title="Qoruz Nexus AI design presentation"
               iframePath="https://embed.figma.com/design/xoo4fAryF3SQ7wnWgpVRQt/portfolio?node-id=330-95&embed-host=share"

            />
          </div>
        </section>

        {/* Next Project */}
        <div className="pb-12 sm:pb-16 md:pb-20">
          <CaseStudyNav />
        </div>
      </div>
    </section>
  );
}
