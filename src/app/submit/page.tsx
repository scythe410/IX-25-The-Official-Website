import SubmissionForm from "@/components/submit/submission-form";

export default function SubmitPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">
          Project Submission
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Ready to show what you've built? Fill out the form below to submit
          your project for judging.
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <SubmissionForm />
      </div>
    </div>
  );
}
