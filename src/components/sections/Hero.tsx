import PrimaryBtn from "../buttons/ButtonPrimary";
import SecondaryBtn from "../buttons/ButtonSecondary";
import SealCheckIcon from "../icons/TickIcon";

function Hero() {
  return (
    <section className="y-portfolio__hero-wrapper">
      <div className="mx-auto w-full">
        <div className="y-portfolio__hero-inner flex flex-col gap-3 items-center justify-center  h-dvh">
          <div className="y-porfolio__heading-area flex flex-col gap-3 text-center">
            <h1 className="y-portolio__hero-title font-bold flex flex-col gap-0 gradient-text text-[4.5rem] leading-20">
              <span>Earn the Badge</span>
              <span>Creators Trust Trust.</span>
            </h1>
            <p className="y-portfolio__hero-title-desc text-[20px]">
              Get verified and connect directly with{" "}
              <b>140,000+ professional creators.</b>
            </p>
          </div>

          <div className="y-portfolio__hero-cta-area w-max my-3 flex gap-3 items-center">
            <PrimaryBtn className="flex items-center gap-1 bg-black text-white text-[1rem] px-4 py-1.5 rounded-md">
              <SealCheckIcon className="text-[#F8F9FA]" /> Contact
            </PrimaryBtn>
            <SecondaryBtn className="flex items-center gap-1 text-[1rem] px-4 py-1.5 rounded-md border border-solid border-[#03B197] font-semibold">
              Story line <SealCheckIcon fill="currentcolor" />
            </SecondaryBtn>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
