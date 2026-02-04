import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useFormContext } from '@/context/FormContext';
export const Header = () => {
  const {
    openForm
  } = useFormContext();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-card/95 backdrop-blur-md shadow-md' : 'bg-card'}`}>
      <div className="container-narrow mx-auto bg-inherit text-inherit">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl md:text-2xl font-heading font-bold text-foreground">
              Gaurav Sharma
            </span>
          </div>

          {/* CTA Button - visible on all screen sizes */}
          <Button variant="cta" size="default" className="md:size-lg" onClick={openForm}>
            Join Webinar
          </Button>
        </div>
      </div>
    </header>;
};