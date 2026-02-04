import { Button } from '@/components/ui/button';
import { useFormContext } from '@/context/FormContext';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

const benefits = [
  'Learn the exact framework to generate qualified leads',
  'Discover how to scale ads without burning budget',
  'Get actionable strategies you can implement immediately',
  'Understand funnels that convert traffic into revenue',
];

export const HeroSection = () => {
  const { openForm } = useFormContext();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-narrow mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 text-sm">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-primary-foreground">Live Webinar • Limited Seats</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-primary-foreground">
              Master Performance Marketing & Generate{' '}
              <span className="text-accent">Consistent Sales</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl">
              Join this exclusive live session and learn the proven strategies that have helped businesses generate crores in revenue through strategic ad campaigns.
            </p>

            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-primary-foreground/90"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="xl" onClick={openForm}>
                Join Webinar Now
                <ArrowRight className="ml-2" />
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/60">
              ✓ No credit card required • ✓ Instant access • ✓ Live Q&A included
            </p>
          </div>

          {/* Right Column - Video */}
          <div className="animate-fade-in-up animation-delay-200">
            <div className="relative group">
              {/* Video frame */}
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-2xl border border-border">
                <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  {/* Placeholder video thumbnail */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                  
                  {/* Play button */}
                  <button className="relative z-10 w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform group-hover:shadow-[var(--cta-glow)]">
                    <Play className="w-8 h-8 text-accent-foreground ml-1" fill="currentColor" />
                  </button>
                  
                  {/* Video preview text */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-border">
                      <p className="text-foreground text-sm font-medium">
                        Watch: How I Generated ₹10 Cr+ Through Performance Marketing
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float">
                🔴 Live Session
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
