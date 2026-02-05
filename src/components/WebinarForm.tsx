import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useFormContext } from '@/context/FormContext';
import { ArrowRight, Loader2 } from 'lucide-react';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { trackLead, trackCompleteRegistration } from './FacebookPixelTracker';

const MAKE_WEBHOOK_URL = 'https://hook.eu2.make.com/mom6xl6uftrr9y7f9l4lwpve0xv37uu8';

const formSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().min(1, 'Email is required').email('Please enter a valid email'),
  phone: z.string().trim().min(1, 'Contact number is required').min(10, 'Please enter a valid phone number'),
  city: z.string().trim().min(1, 'City is required').max(100, 'City must be less than 100 characters'),
  occupation: z.enum(['working', 'student'], { required_error: 'Please select an option' }),
  jobRole: z.string().optional(),
  degree: z.string().optional(),
}).refine((data) => {
  if (data.occupation === 'working' && (!data.jobRole || data.jobRole.trim() === '')) {
    return false;
  }
  return true;
}, { message: 'Job role is required', path: ['jobRole'] })
.refine((data) => {
  if (data.occupation === 'student' && (!data.degree || data.degree.trim() === '')) {
    return false;
  }
  return true;
}, { message: 'Degree is required', path: ['degree'] });

export const WebinarForm = () => {
  const { isFormOpen, closeForm, setIsSubmitted } = useFormContext();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();
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
    setErrors({});
    
    const result = formSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }
    
    setIsLoading(true);

    try {
      // Prepare data for CRM/Google Sheets
      // Using URLSearchParams for better webhook compatibility
      const leadData = new URLSearchParams();
      leadData.append('Name', formData.name.trim());
      leadData.append('Email', formData.email.trim());
      leadData.append('Phone', formData.phone.trim());
      leadData.append('City', formData.city.trim());
      leadData.append('Occupation_Type', formData.occupation === 'working' ? 'Working Professional' : 'Student');
      leadData.append('Job_Role', formData.occupation === 'working' ? formData.jobRole.trim() : '');
      leadData.append('Degree', formData.occupation === 'student' ? formData.degree.trim() : '');
      leadData.append('Submitted_At', new Date().toISOString());

      // Send to Make.com webhook
      await fetch(MAKE_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        mode: 'no-cors', // Required for cross-origin webhooks
        body: leadData.toString(),
      });

      // Track Facebook Pixel events
      trackLead({ content_name: 'Webinar Registration' });
      trackCompleteRegistration({ content_name: 'Webinar Registration' });

      // Success - close form and redirect
      setIsLoading(false);
      closeForm();
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsLoading(false);
      toast({
        title: 'Submission Error',
        description: 'There was an issue submitting your registration. Please try again.',
        variant: 'destructive',
      });
    }
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
            <Label htmlFor="name" className="text-foreground text-sm font-medium">Full Name <span className="text-destructive">*</span></Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className={`h-9 bg-background border shadow-sm focus:ring-accent text-sm ${errors.name ? 'border-destructive' : 'border-input'}`}
            />
            {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="email" className="text-foreground text-sm font-medium">Email Address <span className="text-destructive">*</span></Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              className={`h-9 bg-background border shadow-sm focus:ring-accent text-sm ${errors.email ? 'border-destructive' : 'border-input'}`}
            />
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="phone" className="text-foreground text-sm font-medium">Contact Number <span className="text-destructive">*</span></Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
              className={`h-9 bg-background border shadow-sm focus:ring-accent text-sm ${errors.phone ? 'border-destructive' : 'border-input'}`}
            />
            {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="city" className="text-foreground text-sm font-medium">City <span className="text-destructive">*</span></Label>
            <Input
              id="city"
              name="city"
              placeholder="e.g. Mumbai, Delhi, Bangalore"
              value={formData.city}
              onChange={handleChange}
              className={`h-9 bg-background border shadow-sm focus:ring-accent text-sm ${errors.city ? 'border-destructive' : 'border-input'}`}
            />
            {errors.city && <p className="text-xs text-destructive">{errors.city}</p>}
          </div>

          <div className="space-y-1">
            <Label className="text-foreground text-sm font-medium">You are a <span className="text-destructive">*</span></Label>
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
            {errors.occupation && <p className="text-xs text-destructive">{errors.occupation}</p>}
          </div>

          {formData.occupation === 'working' && (
            <div className="space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
              <Label htmlFor="jobRole" className="text-foreground text-sm font-medium">Job Role <span className="text-destructive">*</span></Label>
              <Input
                id="jobRole"
                name="jobRole"
                placeholder="e.g. Marketing Manager, Founder, Freelancer"
                value={formData.jobRole}
                onChange={handleChange}
                className={`h-9 bg-background border shadow-sm focus:ring-accent text-sm ${errors.jobRole ? 'border-destructive' : 'border-input'}`}
              />
              {errors.jobRole && <p className="text-xs text-destructive">{errors.jobRole}</p>}
            </div>
          )}

          {formData.occupation === 'student' && (
            <div className="space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
              <Label htmlFor="degree" className="text-foreground text-sm font-medium">Current Course/Degree <span className="text-destructive">*</span></Label>
              <Input
                id="degree"
                name="degree"
                placeholder="e.g. BBA, MBA, B.Tech"
                value={formData.degree}
                onChange={handleChange}
                className={`h-9 bg-background border shadow-sm focus:ring-accent text-sm ${errors.degree ? 'border-destructive' : 'border-input'}`}
              />
              {errors.degree && <p className="text-xs text-destructive">{errors.degree}</p>}
            </div>
          )}
          
          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full mt-2 h-10 text-sm"
            disabled={isLoading}
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
