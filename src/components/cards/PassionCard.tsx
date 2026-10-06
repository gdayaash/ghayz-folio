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
    <article className="y-folio__passion-card rounded-[11px] border border-solid border-[#CED4DA] overflow-hidden">
      <div className="y-folio__passion-card-title-area flex flex-col gap-1 bg-[#F0F2F4] px-8 py-6">
        <h3 className="y-folio__passion-card-title text-2xl">{title}</h3>

        <p className="y-folio__passion-card-subtitle text-[0.9rem]">
          {subtitle}
        </p>
      </div>

      <div className="y-folio__passion-card-body-area">
        <Image
          className="y-folio__passion-card-image"
          src={picpath ?? ""}
          alt={title ?? ""}
          width={500}
          height={500}
        />
      </div>
    </article>
  );
}
