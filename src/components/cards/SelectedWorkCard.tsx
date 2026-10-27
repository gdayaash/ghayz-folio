"use client";

import Image from "next/image";

type SelectedWorkCardProps = {
  title: string;
  description: string;
  image: string;
  link ?: string;
};

export default function SelectedWorkCard({
  title,
  description,
  image,
  link
}: SelectedWorkCardProps) {
  return (
    <article className="y-folio__selected-work-card">
      <a href={link} className="flex flex-col gap-14 justify-between">
        <div className="y-folio__selected-work-card-content flex flex-col gap-2">
          <h2 className="y-folio__selected-work-card-title">{title}</h2>

          <p className="y-folio__selected-work-card-description text-[#808584] leading-[1.2em]">
            {description}
          </p>
        </div>

        <div className="y-folio__selected-work-card-image flex flex-col items-center">
          <Image src={image} alt={title} width={500} height={200} />
        </div>
      </a>
    </article>
  );
}
