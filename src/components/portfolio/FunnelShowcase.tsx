 import { Button } from '@/components/ui/button';
 import { ArrowRight, Users, ShoppingCart, Presentation, Gem } from 'lucide-react';
 
 const funnels = [
   {
     icon: Presentation,
     type: 'Webinar Funnel',
     objective: 'High-ticket sales & course enrollments',
     trafficSource: 'Meta Ads + YouTube',
     conversionGoal: 'Webinar registration → Sale',
   },
   {
     icon: Users,
     type: 'Lead Gen Funnel',
     objective: 'Qualified lead generation',
     trafficSource: 'Google Ads + Meta',
     conversionGoal: 'Form submission → Call booked',
   },
   {
     icon: ShoppingCart,
     type: 'E-commerce Funnel',
     objective: 'Direct product sales',
     trafficSource: 'Meta Ads + Google Shopping',
     conversionGoal: 'Add to cart → Purchase',
   },
   {
     icon: Gem,
     type: 'High-Ticket Funnel',
     objective: 'Premium service sales',
     trafficSource: 'LinkedIn + Meta Ads',
     conversionGoal: 'Application → Discovery call',
   },
 ];
 
 export const FunnelShowcase = () => {
   return (
     <section id="funnel-showcase" className="section-padding bg-background">
       <div className="container-narrow mx-auto">
         <div className="text-center mb-12">
           <span className="text-accent font-semibold text-sm uppercase tracking-wider">
             Portfolio
           </span>
           <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
             Funnel Systems I Build
           </h2>
           <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
             Each funnel is designed with a specific objective, traffic strategy, and conversion goal in mind.
           </p>
         </div>
 
         <div className="grid sm:grid-cols-2 gap-6">
           {funnels.map((funnel, index) => (
             <div
               key={index}
               className="bg-card border border-border rounded-xl p-6 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 group"
             >
               <div className="flex items-start gap-4 mb-4">
                 <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                   <funnel.icon className="w-6 h-6 text-accent" />
                 </div>
                 <div>
                   <h3 className="text-xl font-semibold text-foreground">{funnel.type}</h3>
                   <p className="text-muted-foreground text-sm">{funnel.objective}</p>
                 </div>
               </div>
 
               <div className="space-y-3 mb-6">
                 <div className="flex items-center justify-between text-sm">
                   <span className="text-muted-foreground">Traffic Source</span>
                   <span className="text-foreground font-medium">{funnel.trafficSource}</span>
                 </div>
                 <div className="flex items-center justify-between text-sm">
                   <span className="text-muted-foreground">Conversion Goal</span>
                   <span className="text-foreground font-medium">{funnel.conversionGoal}</span>
                 </div>
               </div>
 
               <Button variant="outline" size="sm" className="w-full group-hover:border-accent group-hover:text-accent transition-colors">
                 See How It Works
                 <ArrowRight className="ml-2 w-4 h-4" />
               </Button>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };