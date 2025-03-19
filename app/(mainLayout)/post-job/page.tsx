import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ArcjetLogo from "@/public/arcjet.png";
import InngestLogo from "@/public/inngest.jpg";
import Image from "next/image";
const companies = [
  { id: 0, name: "Arcjet", logo: ArcjetLogo },
  { id: 1, name: "Inngest", logo: InngestLogo },
  { id: 2, name: "Arcjet", logo: ArcjetLogo },
  { id: 3, name: "Inngest", logo: InngestLogo },
  { id: 4, name: "Arcjet", logo: ArcjetLogo },
  { id: 5, name: "Inngest", logo: InngestLogo },
];

const testimonials = [
  {
    quote:
      "This platform streamlined our hiring and brought in top talent effortlessly.",
    author: "Polar Bear",
    company: "Artic Circle",
  },
  {
    quote:
      "A game-changer for our recruitment process. Highly efficient and intuitive.",
    author: "Snowy Owl",
    company: "Frostbyte Inc.",
  },
  {
    quote:
      "Saved us hours of work every week. The results speak for themselves.",
    author: "Sealena",
    company: "IceFlow Solutions",
  },
  {
    quote:
      "User-friendly and effective—helped us find the perfect candidates fast.",
    author: "Arctic Fox",
    company: "ChillTech Co.",
  },
];

const stats = [
  {
    id: 0,
    value: "10K+",
    label: "Monthly active job seekers",
  },
  {
    id: 1,
    value: "48h",
    label: "Average time to hire",
  },
  {
    id: 3,
    value: "95%",
    label: "Employer satisfaction rate",
  },
  {
    id: 4,
    value: "500+",
    label: "Companies hiring remotely",
  },
];

export default function PostJobPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
      <Card className="col-span-1 lg:col-span-2">
        <CardHeader>
          <CardTitle>This is the form</CardTitle>
        </CardHeader>
      </Card>

      <div className="col-span-1">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">
              Trusted by Industry Leaders
            </CardTitle>
            <CardDescription>
              Join thousands of companies hiring top talent
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Company logos */}
            <div className="grid grid-cols-3 gap-4">
              {companies.map((company) => (
                <div key={company.id}>
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={80}
                    height={80}
                    className="rounded-lg opacity-85 transition-opacity hover:opacity-100"
                  />
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <blockquote
                  key={index}
                  className="border-l-2 border-primary pl-4"
                >
                  <p className="text-sm text-muted-foreground italic">
                    "{testimonial.quote}"
                  </p>
                  <footer className="mt-2 text-sm font-medium">
                    - {testimonial.author}, {testimonial.company}
                  </footer>
                </blockquote>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.id} className="rounded-lg bg-muted p-4"> 
                  <h4 className="text-2xl font-bold">
                    {stat.value}
                  </h4>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
