import Image from "next/image";

type SelectedWorkCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function SelectedWorkCard({
  title,
  description,
  image,
}: SelectedWorkCardProps) {
  return (
    <article className="y-folio__selected-work-card flex flex-col gap-4 justify-between">
      <div className="y-folio__selected-work-card-content flex flex-col gap-2">
        <h2 className="y-folio__selected-work-card-title">{title}</h2>

        <p className="y-folio__selected-work-card-description text-[#808584]">
          {description}
        </p>
      </div>

      <div className="y-folio__selected-work-card-image">
        <Image src={image} alt={title} width={300} height={200} />
      </div>
    </article>
  );
}
