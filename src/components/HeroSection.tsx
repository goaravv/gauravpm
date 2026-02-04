import { Button } from '@/components/ui/button';
import { useFormContext } from '@/context/FormContext';
import { ArrowRight, CheckCircle } from 'lucide-react';

const benefits = [
  'Learn the exact framework to generate qualified leads',
  'Discover how to scale ads without burning budget',
  'Get actionable strategies you can implement immediately',
  'Understand funnels that convert traffic into revenue',
];

export const HeroSection = () => {
  const { openForm } = useFormContext();

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-primary">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-narrow mx-auto px-4 md:px-8 relative z-10">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/S50UzIJK5_8?autoplay=1&mute=1&rel=0"
                    title="Webinar Preview"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float">
                🔴 Live Session
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Reordered */}
        <div className="lg:hidden space-y-6 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 text-sm">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-primary-foreground">Live Webinar • Limited Seats</span>
          </div>

          {/* Heading - Centered */}
          <h1 className="text-3xl sm:text-4xl font-heading font-bold leading-tight text-primary-foreground text-center">
            Master Performance Marketing & Generate{' '}
            <span className="text-accent">Consistent Sales</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-primary-foreground/80 text-center">
            Join this exclusive live session and learn the proven strategies that have helped businesses generate crores in revenue.
          </p>

          {/* Video - Autoplaying */}
          <div className="relative">
            <div className="relative bg-card rounded-xl overflow-hidden shadow-xl border border-border">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/S50UzIJK5_8?autoplay=1&mute=1&rel=0&playsinline=1"
                  title="Webinar Preview"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
              🔴 Live
            </div>
          </div>

          {/* Checklist */}
          <ul className="space-y-3 pt-2">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-primary-foreground/90 text-sm"
              >
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="flex flex-col gap-3 pt-2">
            <Button variant="hero" size="lg" onClick={openForm} className="w-full">
              Join Webinar Now
              <ArrowRight className="ml-2" />
            </Button>
            <p className="text-xs text-primary-foreground/60 text-center">
              ✓ No credit card required • ✓ Instant access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
