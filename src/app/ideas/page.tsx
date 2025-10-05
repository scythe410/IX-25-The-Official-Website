import IdeaGenerator from "@/components/ideas/idea-generator";

export default function IdeasPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">
          AI Idea Generator
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Stuck in a creative rut? Use our AI-powered tool to brainstorm
          innovative project ideas for the hackathon.
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <IdeaGenerator />
      </div>
    </div>
  );
}
