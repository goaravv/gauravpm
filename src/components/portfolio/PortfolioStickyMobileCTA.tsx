 import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';
 
 export const PortfolioStickyMobileCTA = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/8533990352?text=Hi%20Gaurav%2C%20I%20want%20to%20work%20with%20you', '_blank');
  };

   return (
     <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-card/95 backdrop-blur-md border-t border-border p-4 shadow-lg">
      <Button 
        variant="cta" 
        size="lg" 
        className="w-full text-primary" 
        type="button"
        onClick={handleWhatsAppClick}
      >
        <MessageCircle className="mr-2 w-5 h-5" />
         Work With Me
         <ArrowRight className="ml-2" />
       </Button>
     </div>
   );
 };