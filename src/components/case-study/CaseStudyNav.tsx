import { ArrowUpRightIcon } from "@phosphor-icons/react";
import PrimaryBtn from "../buttons/ButtonPrimary";

export default function CaseStudyNav() {
  return (
    <section className="y-folio__case-study-nav-wrapper py-10 sm:py-10 lg:py-24">
      <div className="y-folio__case-study-nav-inner flex flex-col gap-y-3">
        <div
          className="
            y-folio__case-study-nav-box
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
              y-folio__case-study-nav-title
              text-[clamp(2rem,6vw,3rem)]
              font-semibold
              leading-tight
              text-white
            "
          >
            Wait List - Case Study
          </h4>

          <p className="y-folio__case-study-nav-description">
            The next Description
          </p>

          <div className="mt-4 sm:mt-5 lg:mt-6">
            <PrimaryBtn
              className="
                        flex
                        items-center
                        gap-1.5
                        rounded-md
                        bg-black
                        px-3
                        py-2
                        text-sm
                        text-white
                        sm:px-4
                        sm:text-[0.9rem]
                        lg:px-6
                        lg:py-2
                        lg:text-[1rem]
                      "
            >
              <span>Read more</span>
              <ArrowUpRightIcon size={20} />
            </PrimaryBtn>
          </div>
        </div>
      </div>
    </section>
  );
}
