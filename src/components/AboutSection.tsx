import { CheckCircle } from 'lucide-react';
 
 const credentials = [
   'Ex-Agency Founder',
   '10K+ followers on LinkedIn',
   'Recognized by Google Search Central',
   'Worked with 70+ brands',
   'Delivered up to 9X ROAS for D2C brands',
   'Generated ₹1 Cr+ in net sales through paid campaigns',
 ];
 
export const AboutSection = () => {
  return <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img alt="Gaurav Sharma - Performance Marketing Expert" className="w-full h-full object-cover" src="/lovable-uploads/4619ba86-0da1-4ea6-85f7-3102cc862f13.jpg" />
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
              I'm a Performance Marketer with 7+ years of experience helping brands grow profitably through data-driven advertising. My work is focused on scaling sales, leads, ROAS, and long-term business growth using performance marketing across Google Ads and Meta Ads.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I've worked with D2C brands and service businesses to build predictable, conversion-focused ad systems that prioritize revenue over vanity metrics.
            </p>

            <div className="pt-2">
              <h3 className="text-lg font-semibold text-foreground mb-3">Credibility & Results</h3>
            <ul className="space-y-3 pt-2">
              {credentials.map((credential, index) => <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{credential}</span>
                </li>)}
            </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};