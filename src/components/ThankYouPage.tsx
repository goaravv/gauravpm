import { Button } from '@/components/ui/button';
import { CheckCircle, MessageCircle } from 'lucide-react';

export const ThankYouPage = () => {
  const whatsappLink = 'https://wa.me/919999999999'; // Placeholder link

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Success icon */}
        <div className="w-24 h-24 mx-auto mb-8 bg-accent/10 rounded-full flex items-center justify-center animate-fade-in-up">
          <CheckCircle className="w-12 h-12 text-accent" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 animate-fade-in-up">
          You're In! 🎉
        </h1>

        {/* Message */}
        <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up animation-delay-100">
          Thank you for registering! Join our WhatsApp community to get the webinar link and stay updated.
        </p>

        {/* WhatsApp CTA */}
        <Button
          variant="whatsapp"
          size="xl"
          className="w-full animate-fade-in-up animation-delay-200"
          onClick={() => window.open(whatsappLink, '_blank')}
        >
          <MessageCircle className="mr-2" />
          Join WhatsApp Community
        </Button>

        {/* Additional info */}
        <p className="text-sm text-muted-foreground mt-6 animate-fade-in-up animation-delay-300">
          Check your WhatsApp for the webinar link and reminders
        </p>
      </div>
    </div>
  );
};
