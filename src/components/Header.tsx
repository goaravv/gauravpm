import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useFormContext } from '@/context/FormContext';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const { openForm } = useFormContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-narrow mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl md:text-2xl font-heading font-bold text-foreground">
              Gaurav Sharma
            </span>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="cta" size="lg" onClick={openForm}>
              Join Webinar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <Button
              variant="cta"
              size="lg"
              className="w-full"
              onClick={() => {
                openForm();
                setIsMobileMenuOpen(false);
              }}
            >
              Join Webinar
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
