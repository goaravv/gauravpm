 import { useState, useEffect } from 'react';
 import { Button } from '@/components/ui/button';
 import { useNavigate } from 'react-router-dom';
 
 export const PortfolioHeader = () => {
   const navigate = useNavigate();
   const [isScrolled, setIsScrolled] = useState(false);
 
   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 20);
     };
     window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll);
   }, []);
 
   return (
     <header
       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
         isScrolled ? 'bg-card/95 backdrop-blur-md shadow-md' : 'bg-card'
       }`}
     >
       <div className="container-narrow mx-auto">
         <div className="flex items-center justify-between h-16 md:h-20">
           <span className="text-xl md:text-2xl font-heading font-bold text-foreground">
             Gaurav Sharma
           </span>
            <Button 
              variant="cta" 
              size="default" 
              onClick={() => window.open('https://wa.me/8533990352?text=Hi%20Gaurav%2C%20I%20want%20to%20work%20with%20you', '_blank')}
              className="text-primary"
            >
             Work With Me
           </Button>
         </div>
       </div>
     </header>
   );
 };