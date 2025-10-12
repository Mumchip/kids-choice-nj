import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard = ({ quote, author, role }: TestimonialCardProps) => {
  return (
    <Card className="h-full hover-lift border-2 hover:border-primary/20 relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-primary/5">
      <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
      <CardContent className="pt-6 relative">
        <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-4 shadow-medium">
          <Quote className="w-7 h-7 text-white" />
        </div>
        <p className="text-foreground mb-6 italic leading-relaxed">"{quote}"</p>
        <div className="border-t-2 border-primary/10 pt-4">
          <p className="font-bold text-foreground text-lg">{author}</p>
          <p className="text-sm text-muted-foreground font-medium">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
