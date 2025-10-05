import TeamFinder from "@/components/teams/team-finder";
import { participants } from "@/lib/data";

export default function TeamsPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">
          Find Your Team
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          Connect with other participants, share your skills, and form the
          ultimate hackathon team.
        </p>
      </div>
      <TeamFinder participants={participants} />
    </div>
  );
}
