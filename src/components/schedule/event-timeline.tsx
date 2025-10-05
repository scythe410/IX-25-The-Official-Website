import { scheduleEvents } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Mic, Laptop, PartyPopper } from "lucide-react";

const iconClasses = "h-5 w-5";

const eventIcons = {
  talk: <Mic className={iconClasses} />,
  workshop: <Laptop className={iconClasses} />,
  event: <PartyPopper className={iconClasses} />,
};

const eventColorClasses = {
  talk: "border-secondary bg-secondary/20 hover:shadow-lg hover:shadow-secondary/10",
  workshop: "border-accent bg-accent/20 hover:shadow-lg hover:shadow-accent/10",
  event:
    "border-muted-foreground/50 bg-muted/50 hover:shadow-lg hover:shadow-muted-foreground/10",
};

const iconColorClasses = {
  talk: "bg-secondary text-secondary-foreground",
  workshop: "bg-accent text-accent-foreground",
  event: "bg-muted text-muted-foreground",
};

export default function EventTimeline() {
  return (
    <div className="relative">
      <div
        className="absolute left-6 md:left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"
        aria-hidden="true"
      />

      <div className="space-y-12">
        {scheduleEvents.map((event, index) => (
          <div
            key={event.id}
            className="relative flex items-center md:justify-center"
          >
            <div
              className={cn(
                "flex w-full md:w-1/2",
                index % 2 === 0 ? "md:justify-end" : "md:justify-start"
              )}
            >
              <div
                className={cn(
                  "w-full md:max-w-md p-2",
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                )}
              >
                <Card className={cn("transition-shadow", eventColorClasses[event.type])}>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <Badge variant="outline" className="shrink-0 capitalize border-current">
                        {event.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground pt-1">
                      {event.time}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div
              className={cn(
                "absolute left-6 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center md:left-1/2",
                iconColorClasses[event.type]
              )}
            >
              {eventIcons[event.type]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
