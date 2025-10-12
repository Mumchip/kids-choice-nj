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
    <Card className="hover:shadow-medium transition-all duration-300 border-2 hover:border-primary/20">
      <CardHeader>
        <div className="w-14 h-14 bg-hero-gradient rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="text-primary mt-1">✓</span>
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
