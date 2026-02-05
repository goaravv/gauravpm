 import { Button } from '@/components/ui/button';
 import { useNavigate } from 'react-router-dom';
 import { ArrowRight } from 'lucide-react';
 
 export const PortfolioStickyMobileCTA = () => {
   const navigate = useNavigate();
 
   return (
     <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-card/95 backdrop-blur-md border-t border-border p-4 shadow-lg">
       <Button variant="cta" size="lg" className="w-full" onClick={() => navigate('/webinar')}>
         Work With Me
         <ArrowRight className="ml-2" />
       </Button>
     </div>
   );
 };