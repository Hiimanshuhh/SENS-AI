import HeroSection from "@/components/hero";
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { features } from "@/data/features";


export default function Home() {
  return (
    <div>
      <div className="grid-background"></div>
      <HeroSection />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px">
          <h2>Powerful Features For Your Career Growth</h2>
          <div>
            {features.map((feature, index) => {
              return (
                <Card>
                  <CardContent>
                    <div key={feature.icon}>
                      {feature.icon}
                      <h3 key={feature.title}>{feature.title}</h3>
                      <p key={feature.description}>{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
