import PrimaryBtn from "../buttons/ButtonPrimary";
import SealCheckIcon from "../icons/TickIcon";

function ContactUsCta() {
  return (
    <section className="y-folio__contact-us-wrapper py-8 sm:py-10 lg:py-12">
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
            "
          >
            Have a product problem worth solving? <br />
            I&apos;d like to hear about it.
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
              <SealCheckIcon className="h-4 w-4 text-[#F8F9FA] sm:h-5 sm:w-5" />
              <span>Get in touch</span>
            </PrimaryBtn>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUsCta;
