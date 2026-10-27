import Image from "next/image";

type PassionCardProps = {
  title?: string;
  subtitle?: string;
  picpath?: string;
};

export default function PassionCard({
  title,
  subtitle,
  picpath,
}: PassionCardProps) {
  return (
    <article className="y-folio__passion-card w-full max-w-[390px] overflow-hidden rounded-[11px] border border-solid border-[#CED4DA]">
      <div className="y-folio__passion-card-title-area flex flex-col gap-1 bg-[#F0F2F4] px-5 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-[32px]">
        <h3 className="y-folio__passion-card-title text-[24px] leading-tight sm:text-[1.5rem] font-light">
          <b>
            {title}
          </b>
        </h3>

        <p className="y-folio__passion-card-subtitle text-[0.8rem] leading-relaxed sm:text-[0.85rem] lg:text-[1.225rem] font-light">
          {subtitle}
        </p>
      </div>

      <div className="y-folio__passion-card-body-area">
        <Image className="y-folio__passion-card-image h-auto w-full object-cover"
          src={picpath ?? ""}
          alt={title ?? ""}
          width={500}
          height={500}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
        />
      </div>
    </article>
  );
}
