type TimelineCardProps = {
  title?: string;
  description?: string;
};

export default function TimelineCard({
  title = "Topic will be placed here",
  description = "This is just the detailed explanation of project, which last 2 lines",
}: TimelineCardProps) {
  return (
    <article
      className="
        y-folio__timeline-card-wrapper
        glass-card
        w-full
        px-5
        py-6
        sm:px-6
        sm:py-7
        lg:px-8
        lg:py-8
        h-auto
        sm:h-[186px]
      "
    >
      <h3
        className="
          y-folio__timeline-card-title
          text-[24px] md:text-[28px]
          font-medium
          leading-tight
          tracking-normal
          text-white
        "
      >
        {title}
      </h3>

      <p
        className="
          y-folio__timeline-card-description
          text-[0.875rem]
          font-extralight
          sm:text-[0.9rem]
          lg:text-[0.95rem]
        "
      >
        {description}
      </p>
    </article>
  );
}
