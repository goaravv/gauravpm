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
      <DialogContent className="sm:max-w-md bg-card border-border max-h-[85vh] overflow-y-auto w-[calc(100%-32px)] max-w-[calc(100%-32px)] sm:max-w-md p-5 sm:p-6 rounded-xl">
        <DialogHeader className="pr-6">
          <DialogTitle className="text-lg sm:text-xl font-heading text-center text-foreground">
            Register for the Webinar
          </DialogTitle>
          <p className="text-center text-muted-foreground text-sm mt-1">
            Fill in your details to secure your spot
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-3 mt-3">
          <div className="space-y-1">
            <Label htmlFor="name" className="text-foreground text-sm font-medium">Full Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="h-9 bg-background border border-input shadow-sm focus:ring-accent text-sm"
            />
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="email" className="text-foreground text-sm font-medium">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="h-9 bg-background border border-input shadow-sm focus:ring-accent text-sm"
            />
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="phone" className="text-foreground text-sm font-medium">Contact Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
              required
              className="h-9 bg-background border border-input shadow-sm focus:ring-accent text-sm"
            />
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="city" className="text-foreground text-sm font-medium">City</Label>
            <Input
              id="city"
              name="city"
              placeholder="e.g. Mumbai, Delhi, Bangalore"
              value={formData.city}
              onChange={handleChange}
              required
              className="h-9 bg-background border border-input shadow-sm focus:ring-accent text-sm"
            />
          </div>

          <div className="space-y-1">
            <Label className="text-foreground text-sm font-medium">You are a</Label>
            <RadioGroup
              value={formData.occupation}
              onValueChange={handleOccupationChange}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="working" id="working" className="h-4 w-4" />
                <Label htmlFor="working" className="font-normal cursor-pointer text-sm">Working Professional</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="student" id="student" className="h-4 w-4" />
                <Label htmlFor="student" className="font-normal cursor-pointer text-sm">Student</Label>
              </div>
            </RadioGroup>
          </div>

          {formData.occupation === 'working' && (
            <div className="space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
              <Label htmlFor="jobRole" className="text-foreground text-sm font-medium">Job Role</Label>
              <Input
                id="jobRole"
                name="jobRole"
                placeholder="e.g. Marketing Manager, Founder, Freelancer"
                value={formData.jobRole}
                onChange={handleChange}
                required
                className="h-9 bg-background border border-input shadow-sm focus:ring-accent text-sm"
              />
            </div>
          )}

          {formData.occupation === 'student' && (
            <div className="space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
              <Label htmlFor="degree" className="text-foreground text-sm font-medium">Current Course/Degree</Label>
              <Input
                id="degree"
                name="degree"
                placeholder="e.g. BBA, MBA, B.Tech"
                value={formData.degree}
                onChange={handleChange}
                required
                className="h-9 bg-background border border-input shadow-sm focus:ring-accent text-sm"
              />
            </div>
          )}
          
          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full mt-2 h-10 text-sm"
            disabled={isLoading || !formData.occupation}
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin h-4 w-4" />
                Registering...
              </>
            ) : (
              <>
                Secure My Spot
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
          
          <p className="text-center text-xs text-muted-foreground">
            You'll get the webinar link on WhatsApp
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
