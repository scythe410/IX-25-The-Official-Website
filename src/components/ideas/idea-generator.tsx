"use client";

import { useState } from "react";
import { generateProjectIdeas } from "@/ai/flows/generate-project-ideas";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Lightbulb, Loader2, Wand2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Skeleton } from "../ui/skeleton";

export default function IdeaGenerator() {
  const [keywords, setKeywords] = useState("");
  const [ideas, setIdeas] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateIdeas = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!keywords.trim()) return;

    setIsLoading(true);
    setIdeas([]);

    try {
      const result = await generateProjectIdeas({ keywords });
      if (result && result.ideas) {
        setIdeas(result.ideas);
      } else {
        throw new Error("Invalid response from AI.");
      }
    } catch (error) {
      console.error("Failed to generate ideas:", error);
      toast({
        variant: "destructive",
        title: "Error Generating Ideas",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>What's on your mind?</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleGenerateIdeas} className="space-y-4">
            <Textarea
              placeholder="Enter keywords, technologies, or problem statements... e.g., 'AI for healthcare', 'sustainable energy', 'Next.js and Firebase'"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              rows={4}
              disabled={isLoading}
              aria-label="Keywords for idea generation"
            />
            <Button
              type="submit"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              disabled={isLoading || !keywords.trim()}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4" />
                  Generate Ideas
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {isLoading && (
        <div className="space-y-4">
          <h3 className="text-2xl font-headline font-semibold tracking-tight">
            Generated Ideas
          </h3>
          <div className="grid gap-4">
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
          </div>
        </div>
      )}

      {ideas.length > 0 && !isLoading && (
        <div className="space-y-4">
          <h3 className="text-2xl font-headline font-semibold tracking-tight">
            Generated Ideas
          </h3>
          <div className="grid gap-4">
            {ideas.map((idea, index) => (
              <Card key={index} className="bg-secondary/50">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-2 bg-accent/20 text-accent rounded-full mt-1">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <p className="text-lg leading-relaxed">{idea}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
