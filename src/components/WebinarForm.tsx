import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
 import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useFormContext } from '@/context/FormContext';
import { ArrowRight, Loader2 } from 'lucide-react';

export const WebinarForm = () => {
  const { isFormOpen, closeForm, setIsSubmitted } = useFormContext();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    occupation: '' as 'working' | 'student' | '',
    jobRole: '',
    degree: '',
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

  const handleOccupationChange = (value: 'working' | 'student') => {
    setFormData(prev => ({
      ...prev,
      occupation: value,
      jobRole: '',
      degree: '',
    }));
  };

  return (
    <Dialog open={isFormOpen} onOpenChange={closeForm}>
      <DialogContent className="sm:max-w-md bg-card border-border max-h-[90vh] overflow-y-auto mx-4">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-heading text-center text-foreground">
            Register for the Webinar
          </DialogTitle>
          <p className="text-center text-muted-foreground mt-2">
            Fill in your details to secure your spot
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-1.5">
            <Label htmlFor="name" className="text-foreground">Full Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="h-11 bg-secondary border-border focus:ring-accent"
            />
          </div>
          
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-foreground">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="h-11 bg-secondary border-border focus:ring-accent"
            />
          </div>
          
          <div className="space-y-1.5">
            <Label htmlFor="phone" className="text-foreground">Contact Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
              required
              className="h-11 bg-secondary border-border focus:ring-accent"
            />
          </div>
          
          <div className="space-y-1.5">
            <Label htmlFor="city" className="text-foreground">City</Label>
            <Input
              id="city"
              name="city"
              placeholder="e.g. Mumbai, Delhi, Bangalore"
              value={formData.city}
              onChange={handleChange}
              required
              className="h-11 bg-secondary border-border focus:ring-accent"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-foreground">You are a</Label>
            <RadioGroup
              value={formData.occupation}
              onValueChange={handleOccupationChange}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="working" id="working" />
                <Label htmlFor="working" className="font-normal cursor-pointer">Working Professional</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="student" id="student" />
                <Label htmlFor="student" className="font-normal cursor-pointer">Student</Label>
              </div>
            </RadioGroup>
          </div>

          {formData.occupation === 'working' && (
            <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
              <Label htmlFor="jobRole" className="text-foreground">Job Role</Label>
              <Input
                id="jobRole"
                name="jobRole"
                placeholder="e.g. Marketing Manager, Founder, Freelancer"
                value={formData.jobRole}
                onChange={handleChange}
                required
                className="h-11 bg-secondary border-border focus:ring-accent"
              />
            </div>
          )}

          {formData.occupation === 'student' && (
            <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
              <Label htmlFor="degree" className="text-foreground">Current Course/Degree</Label>
              <Input
                id="degree"
                name="degree"
                placeholder="e.g. BBA, MBA, B.Tech"
                value={formData.degree}
                onChange={handleChange}
                required
                className="h-11 bg-secondary border-border focus:ring-accent"
              />
            </div>
          )}
          
          <Button
            type="submit"
            variant="hero"
            size="xl"
            className="w-full mt-4"
            disabled={isLoading || !formData.occupation}
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
