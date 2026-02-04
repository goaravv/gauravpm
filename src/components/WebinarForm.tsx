import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFormContext } from '@/context/FormContext';
import { ArrowRight, Loader2 } from 'lucide-react';

export const WebinarForm = () => {
  const { isFormOpen, closeForm, setIsSubmitted } = useFormContext();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    closeForm();
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Dialog open={isFormOpen} onOpenChange={closeForm}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading text-center text-foreground">
            Register for the Webinar
          </DialogTitle>
          <p className="text-center text-muted-foreground mt-2">
            Fill in your details to secure your spot
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">Full Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="h-12 bg-secondary border-border focus:ring-accent"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="h-12 bg-secondary border-border focus:ring-accent"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground">Contact Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
              required
              className="h-12 bg-secondary border-border focus:ring-accent"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location" className="text-foreground">Location</Label>
            <Input
              id="location"
              name="location"
              placeholder="City, State"
              value={formData.location}
              onChange={handleChange}
              required
              className="h-12 bg-secondary border-border focus:ring-accent"
            />
          </div>
          
          <Button
            type="submit"
            variant="hero"
            size="xl"
            className="w-full mt-6"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" />
                Registering...
              </>
            ) : (
              <>
                Secure My Spot
                <ArrowRight className="ml-2" />
              </>
            )}
          </Button>
          
          <p className="text-center text-sm text-muted-foreground">
            You'll get the webinar link on WhatsApp
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
