import type { Participant } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserPlus } from "lucide-react";

type ParticipantCardProps = {
  participant: Participant;
};

export default function ParticipantCard({ participant }: ParticipantCardProps) {
  return (
    <Card className="flex flex-col transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/10">
      <CardHeader className="flex-row items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage
            src={participant.avatarUrl}
            alt={participant.name}
            data-ai-hint={participant.avatarHint}
          />
          <AvatarFallback>{participant.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-xl">{participant.name}</CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {participant.skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground italic">"{participant.interests}"</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
          <UserPlus className="mr-2 h-4 w-4" />
          Connect
        </Button>
      </CardFooter>
    </Card>
  );
}
