import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => {
  return (
    <Card className="group hover-lift hover-glow border-2 hover:border-primary/30 overflow-hidden relative bg-gradient-to-br from-background via-background to-secondary/40">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
      
      <CardHeader className="relative">
        <div className="w-16 h-16 bg-gradient-to-br from-primary via-primary-light to-accent rounded-2xl flex items-center justify-center mb-4 shadow-medium group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="relative">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="text-accent mt-1 font-bold">✓</span>
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
