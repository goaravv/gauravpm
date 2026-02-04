import { Button } from '@/components/ui/button';
import { useFormContext } from '@/context/FormContext';
import { ArrowRight } from 'lucide-react';

export const StickyMobileCTA = () => {
  const { openForm, isSubmitted } = useFormContext();

  if (isSubmitted) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-card/95 backdrop-blur-md border-t border-border p-4 shadow-lg">
      <Button variant="cta" size="lg" className="w-full" onClick={openForm}>
        Join Webinar Now
        <ArrowRight className="ml-2" />
      </Button>
    </div>
  );
};
