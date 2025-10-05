"use client";

import { useState } from "react";
import type { Participant } from "@/lib/data";
import { Input } from "@/components/ui/input";
import ParticipantCard from "./participant-card";
import { Search } from "lucide-react";

type TeamFinderProps = {
  participants: Participant[];
};

export default function TeamFinder({ participants }: TeamFinderProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredParticipants = participants.filter((p) => {
    const searchContent = `${p.name} ${p.skills.join(" ")} ${p.interests}`;
    return searchContent.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <div className="relative mb-8 max-w-lg mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search by name, skill, or interest..."
          className="pl-10 text-base"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search participants"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredParticipants.map((participant) => (
          <ParticipantCard key={participant.id} participant={participant} />
        ))}
      </div>
      {filteredParticipants.length === 0 && (
        <div className="text-center col-span-full py-16">
          <p className="text-muted-foreground">
            No participants found matching your search.
          </p>
        </div>
      )}
    </div>
  );
}
