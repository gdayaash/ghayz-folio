type TimelineCardProps = {
  title?: string;
  description?: string;
};

export default function TimelineCard({
  title = "Topic will be placed here",
  description = "This is just the detailed explanation of project, which last 2 lines",
}: TimelineCardProps) {
  return (
    <article className="y-folio__timeline-card-wrapper glass-card">
      <h3 className="y-folio__timeline-card-title text-[2rem] text-white tracking-normal">
        {title}
      </h3>
      <p className="y-folio__timeline-card-description text-[0.95rem] font-extralight">
        {description}
      </p>
    </article>
  );
}
