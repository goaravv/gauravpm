import { Button } from '@/components/ui/button';
import { useFormContext } from '@/context/FormContext';
import { ArrowRight } from 'lucide-react';

export const CTASection = () => {
  const { openForm } = useFormContext();

  return (
    <section className="section-padding bg-primary">
      <div className="container-narrow mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-primary-foreground">
          Ready to Transform Your{' '}
          <span className="text-accent">Marketing Results?</span>
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          Join thousands of marketers who have already upgraded their skills. Limited seats available for this live session.
        </p>
        <Button variant="hero" size="xl" onClick={openForm}>
          Register Now — It's Free
          <ArrowRight className="ml-2" />
        </Button>
        <p className="text-sm text-primary-foreground/60 mt-4">
          ✓ Live session • ✓ Q&A included • ✓ Actionable strategies
        </p>
      </div>
    </section>
  );
};
