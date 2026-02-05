 import { Button } from '@/components/ui/button';
 import { useNavigate } from 'react-router-dom';
 import { ArrowRight } from 'lucide-react';
 
 export const PortfolioCTA = () => {
   const navigate = useNavigate();
 
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
         <Button variant="hero" size="xl" onClick={() => navigate('/webinar')}>
           Work With Me
           <ArrowRight className="ml-2" />
         </Button>
         <p className="text-sm text-primary-foreground/60 mt-4">
           ✓ Strategy-first approach • ✓ Data-driven execution • ✓ Results you can measure
         </p>
       </div>
     </section>
   );
 };