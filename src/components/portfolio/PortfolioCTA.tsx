import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';
 
 export const PortfolioCTA = () => {
  const whatsappUrl = 'https://wa.me/8533990352?text=Hi%20Gaurav%2C%20I%20want%20to%20work%20with%20you';
 
   return (
     <section className="section-padding bg-primary">
       <div className="container-narrow mx-auto text-center">
         <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-primary-foreground">
           Ready to Scale With{' '}
           <span className="text-accent">Performance Marketing?</span>
         </h2>
         <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
           Let's build systems that drive consistent sales and predictable growth for your business.
         </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="hero" 
            size="xl" 
            onClick={() => window.open(whatsappUrl, '_blank')}
            className="text-primary"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Work With Me
            <ArrowRight className="ml-2" />
          </Button>
        </div>
         <p className="text-sm text-primary-foreground/60 mt-4">
           ✓ Strategy-first approach • ✓ Data-driven execution • ✓ Results you can measure
         </p>
       </div>
     </section>
   );
 };