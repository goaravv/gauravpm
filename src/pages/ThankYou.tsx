 import { Button } from '@/components/ui/button';
 import { CheckCircle, MessageCircle, Calendar, Clock, Users } from 'lucide-react';
import gauravEventImage from '@/assets/gaurav-central-event.png';
 
 export const ThankYou = () => {
   const whatsappLink = 'https://chat.whatsapp.com/J7wBxhd6K3rA61XMFB7GCe?mode=gi_t';
 
   return (
    <div className="min-h-screen bg-secondary flex items-center justify-center px-4 py-6 md:py-12">
      <div className="max-w-lg w-full">
         {/* Success Card */}
        <div className="bg-card rounded-2xl shadow-lg p-5 md:p-10 text-center">
           {/* Success icon */}
          <div className="w-14 h-14 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-accent/10 rounded-full flex items-center justify-center animate-fade-in-up">
            <CheckCircle className="w-7 h-7 md:w-10 md:h-10 text-accent" />
           </div>
 
           {/* Heading */}
          <h1 className="text-2xl md:text-4xl font-heading font-bold text-foreground mb-2 md:mb-3 animate-fade-in-up">
             You're In! 🎉
           </h1>
 
           {/* Message */}
          <p className="text-base md:text-lg text-muted-foreground mb-5 md:mb-8 animate-fade-in-up animation-delay-100">
             Thank you for registering! Your spot is confirmed.
           </p>
 
           {/* Host Info */}
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-5 md:mb-8 p-3 md:p-4 bg-secondary rounded-xl animate-fade-in-up animation-delay-200">
             <img 
               src={gauravEventImage} 
               alt="Gaurav" 
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-accent"
             />
             <div className="text-left">
               <p className="font-semibold text-foreground">Gaurav Sharma</p>
               <p className="text-sm text-muted-foreground">Your Webinar Host</p>
             </div>
           </div>
 
           {/* What's Next */}
          <div className="space-y-2 md:space-y-3 mb-5 md:mb-8 text-left animate-fade-in-up animation-delay-200">
            <h3 className="font-semibold text-foreground text-center mb-2 md:mb-4 text-sm md:text-base">What's Next?</h3>
            <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-secondary rounded-lg">
              <Calendar className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
              <span className="text-xs md:text-sm text-muted-foreground">Webinar date & time will be shared in the group</span>
             </div>
            <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-secondary rounded-lg">
              <Clock className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
              <span className="text-xs md:text-sm text-muted-foreground">You'll get reminders before the session</span>
             </div>
            <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-secondary rounded-lg">
              <Users className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
              <span className="text-xs md:text-sm text-muted-foreground">Connect with like-minded professionals</span>
             </div>
           </div>
 
           {/* WhatsApp CTA */}
           <Button
             variant="whatsapp"
            size="lg"
             className="w-full animate-fade-in-up animation-delay-300"
             onClick={() => window.open(whatsappLink, '_blank')}
           >
             <MessageCircle className="mr-2" />
             Join WhatsApp Community
           </Button>
 
           {/* Additional info */}
          <p className="text-xs md:text-sm text-muted-foreground mt-4 md:mt-6 animate-fade-in-up animation-delay-300">
             Join now to get the webinar link and exclusive updates
           </p>
         </div>
 
         {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-4 md:mt-6">
           Questions? Reply in the WhatsApp group
         </p>
       </div>
     </div>
   );
 };
 
 export default ThankYou;