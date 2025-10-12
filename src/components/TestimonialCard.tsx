import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard = ({ quote, author, role }: TestimonialCardProps) => {
  return (
    <Card className="h-full hover-lift border-2 hover:border-primary/20 relative overflow-hidden bg-gradient-to-br from-background to-secondary/30">
      <CardContent className="pt-6">
        <Quote className="w-10 h-10 text-accent mb-4" />
        <p className="text-muted-foreground mb-4 italic">"{quote}"</p>
        <div className="border-t border-border pt-4">
          <p className="font-semibold text-foreground">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
