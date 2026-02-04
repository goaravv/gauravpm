import { CheckCircle } from 'lucide-react';
import gauravProfile from '@/assets/gaurav-profile.jpg';

const credentials = [
  'Performance Marketing Expert with 12+ years of hands-on experience',
  'Managed over ₹50 Crore in ad spend across industries',
  'Built 200+ high-converting funnels for businesses of all sizes',
  'Trained 5,000+ marketers and business owners',
];

export const AboutSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={gauravProfile} 
                alt="Gaurav Sharma - Performance Marketing Expert"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                About Your Instructor
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Hi, I'm Gaurav Sharma
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm not just a trainer – I'm a practitioner. Every strategy I teach comes from real-world execution, not textbooks. I've spent over a decade in the trenches of performance marketing, managing massive ad budgets and building funnels that actually convert.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My mission is simple: to help businesses and marketers generate consistent, profitable results through strategic advertising – without wasting money on what doesn't work.
            </p>

            <ul className="space-y-3 pt-2">
              {credentials.map((credential, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{credential}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
