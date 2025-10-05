import EventTimeline from "@/components/schedule/event-timeline";

export default function SchedulePage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">
          Event Schedule
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          Follow along with the hackathon's events, workshops, and deadlines.
        </p>
      </div>
      <EventTimeline />
    </div>
  );
}
